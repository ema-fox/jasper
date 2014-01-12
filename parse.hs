import System.IO(hPrint, stderr)
import Text.JSON
import Text.ParserCombinators.Parsec hiding (spaces, space)
import Control.Applicative ((<*), (*>))

escaped = char '\\' >> char 'n' >> return '\n'

stringp = fmap (JSString . toJSString) $ between (char '"') (char '"') $ many $ escaped <|> noneOf "\""

symbol = fmap (JSString . toJSString) $ many1 $ oneOf $ ['a'..'z'] ++ ['A'..'Z'] ++ "||$<>.+=" ++ ['0'..'9']

foo start x = JSArray $ (JSString $ toJSString [start]):x

startSepEndBy1 p sep = sep *> sepEndBy1 p sep

list = fmap JSArray $ between (char '(') (char ')') $ expression `startSepEndBy1` sep

modifer c = (try $ fmap (foo c . (:[])) $ (char c) *> expression) <|> fmap (JSString . toJSString . (:[])) (char c)

expression = symbol <|> list <|> stringp <|> modifer '\'' <|> modifer '`' <|> modifer ','

sep = many $ oneOf " \n\t"

doc = expression `startSepEndBy1` sep

parseDoc = parse (doc <* eof) "stdin"

main = do
  prog <- fmap parseDoc getContents
  case prog of
    Left err -> hPrint stderr err
    Right code -> putStr $ encode code