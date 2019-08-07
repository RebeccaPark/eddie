//import { SINGLE_QUOTE, DOUBLE_QUOTE } from './constants';
const WHITE_SPACE = ' ';
const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';
const COLON = ':';
const COMMA = ',';

function lexString(string) {
  let jsString = '';
  if(string.charAt(0) !== DOUBLE_QUOTE && string.charAt(0) !== SINGLE_QUOTE) {
    return { jsString: null, string };
  }

  for(let char of string) {
    string = string.slice(1);
    jsString += char;

    if((char === DOUBLE_QUOTE || char === SINGLE_QUOTE) && jsString.length > 1) {
      break;
    }
  }

  console.log('jsString: ', jsString);

  return { jsString, string };
}

function lex(string) {
  const tokens = [];

  while(string.length > 0) {
    let { jsString, string2 } = lexString(string);
    if(jsString) tokens.push(jsString);

    break;
  }

  return tokens;
}

console.log(lex('"blah"'));