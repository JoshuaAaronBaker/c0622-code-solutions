/* exported capitalizeWord */
/*
- look at the first and last chars of the given word
-
*/
function capitalizeWord(word) {
// var newWord = '';
  word.replace(word[0], word[0].toUpperCase());
  word.replace(word[word.length - 1], word[word.length - 1].toLowerCase());
  return word;
}
