/* exported isPalindromic */
/*
- make a new variable ans tore the given string in it without any spaces
- loop through the string stored in our variable
- check if each individual letter of the given string is not equal itself reversed
- if true return false
- if false, return true
*/
function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
