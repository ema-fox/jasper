import System.IO(hPrint, stderr)
import Text.JSON
import Text.ParserCombinators.Parsec hiding (spaces, space)
import Control.Applicative ((<*), (*>))

jsstr = JSString . toJSString

escaped = char '\\' >> char 'n' >> return '\n'

stringp = fmap jsstr $ between (char '"') (char '"') $ many $ escaped <|> noneOf "\""

symbol = fmap jsstr $ (many1 $ oneOf $ ['a'..'z'] ++ ['A'..'Z'] ++ "/%-|$<>_*+=" ++ ['0'..'9']) <|> (many1 $ char '.')

sepBy2 p sep = do
       car <- p
       sep
       cdr <- sepBy1 p sep
       return (car:cdr)

dottedExpression = fmap (\x -> JSArray (jsstr ".":x)) $ expression `sepBy2` char '.'

foo start x = JSArray $ (jsstr start):x

startSepEndBy1 p sep = sep *> sepEndBy1 p sep
startSepEndBy p sep = sep *> sepEndBy p sep

list = fmap JSArray $ between (char '(') (char ')') $ expression2 `startSepEndBy` sep

modifer c = (try $ fmap (foo c . (:[])) $ (string c) *> expression2) <|> (try $ fmap jsstr (string c))

expression = symbol <|> list <|> stringp <|> modifer "'" <|> modifer "`" <|> modifer ",@" <|> modifer ","

expression2 = try dottedExpression <|> expression

sep = many $ oneOf " \n\t"

doc = expression2 `startSepEndBy1` sep

parseDoc = parse (doc <* eof) "stdin"

main = do
  prog <- fmap parseDoc getContents
  case prog of
    Left err -> hPrint stderr err
    Right code -> putStr $ encode code
