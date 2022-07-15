/* exported capitalizeWord */
/*
- look at the first and last chars of the given word
-
*/
function capitalizeWord(word) {
  word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    word.replace(word[i], word[i].toLowerCase());
  }
  return word;
}
