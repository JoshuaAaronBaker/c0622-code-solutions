/* exported isLowerCased */
/*
- check if the given word is equal to the word if all the values are lowercased
- if true return true
if false return false
*/
function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
