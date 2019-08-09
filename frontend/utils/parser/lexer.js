// import { 
//   SINGLE_QUOTE,
//   DOUBLE_QUOTE,
//   FUNCTION,
//   LET,
//   CONST,
//   VAR,
//   CLASS,
// } from './constants';

const WHITE_SPACE = ' ';
const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';
const COLON = ':';
const COMMA = ',';

const FUNCTION = 'function';
const LET = 'let';
const CONST = 'const';
const VAR = 'var';
const CLASS = 'class';

function lexString(string) {
  let jsString = '';
  if(string.charAt(0) !== DOUBLE_QUOTE && string.charAt(0) !== SINGLE_QUOTE) {
    return { jsString: null, string };
  }

  for(let char of string) {
    string = string.slice(1);
    jsString += char;
    
    //TODO: account for double and single quote
    if((char === DOUBLE_QUOTE || char === SINGLE_QUOTE) && jsString.length > 1) {
      break;
    }
  }

  return { jsString, string };
}

// function lexKeywords(string) {
//   if()
// }

function lex(string) {
  const tokens = [];

  while(string.length > 0) {
    let { jsString, restOfString } = lexString(string);
    if(jsString) tokens.push(jsString);

    let { keywords, restOfString } = lexKeywords(restOfString);
    if(keywords) tokens.push(keywords);

    break;
  }

  return tokens;
}

console.log(lex('"blah"'));