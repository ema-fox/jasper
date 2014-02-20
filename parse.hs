import System.IO(hPrint, stderr)
import Text.JSON
import Text.ParserCombinators.Parsec hiding (spaces, space)
import Control.Applicative ((<*), (*>))

escaped = char '\\' >> char 'n' >> return '\n'

stringp = fmap showJSON $ between (char '"') (char '"') $ many $ escaped <|> noneOf "\""

symbolBegin = letter <|> oneOf "/%-|$<>_*+="

symbol = fmap showJSON $ (symbolBegin >>= \x -> fmap (x:) (many $ symbolBegin <|> digit)) <|> (many1 $ char '.')

number = fmap (showJSON . (read :: String -> Double) . concat ) $ sequence [(option "" $ string "-"), many1 digit, option "" $ string ".", many digit]

sepBy2 p sep = do
       car <- p
       sep
       cdr <- sepBy1 p sep
       return (car:cdr)

dottedExpression = fmap (\x -> showJSON (showJSON ".":x)) $ expression `sepBy2` char '.'

foo start x = showJSON $ (showJSON start):x

startSepEndBy1 p sep = sep *> sepEndBy1 p sep
startSepEndBy p sep = sep *> sepEndBy p sep

list = fmap showJSON $ between (char '(') (char ')') $ expression2 `startSepEndBy` sep

modifer c = (try $ fmap (foo c . (:[])) $ (string c) *> expression2) <|> (try $ fmap showJSON (string c))

expression = try number <|> symbol <|> list <|> stringp <|> modifer "'" <|> modifer "`" <|> modifer ",@" <|> modifer ","

expression2 = try dottedExpression <|> expression

sep = many $ oneOf " \n\t"

doc = expression2 `startSepEndBy1` sep

parseDoc = parse (doc <* eof) "stdin"

main = do
  prog <- fmap parseDoc getContents
  case prog of
    Left err -> hPrint stderr err
    Right code -> putStr $ encode code
