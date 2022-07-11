/* exported capitalize */
/*
- look at the first character of the given word and capitalize it
- loop through the rest of the word
- make each subsequent character lowercase
- return the original word.
*/

function capitalize(word) {
  word = word.replace(word[0], word[0].toUpperCase());
  for (var i = 1; i <= word.length - 1; i++) {
    word = word.replace(word[i], word[i].toLowerCase());
  }
  return word;
}
