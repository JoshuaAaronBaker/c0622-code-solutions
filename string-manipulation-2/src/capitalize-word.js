/* exported capitalizeWord */
/*
- look at the first and last chars of the given word
-
*/
function capitalizeWord(word) {
  word.replace(word[0], word[0].toUpperCase());
  for (var i = 1; i < word.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (word == 'JavaScript') {
      word = 'JavaScript';
      return word;
    } else {
      word.replace(word[i], word[i].toLowerCase());
    }
  }
  return word;
}
