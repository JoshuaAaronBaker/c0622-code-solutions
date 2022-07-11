/* exported isUpperCased */
/*
- evaluate if the given word is equal to the word if all letters were uppercased
- if true return true
- if false return false.
*/
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
