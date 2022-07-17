/* exported capitalizeWord */
/*
- make a place to store modified word
- chang to the first letter of the given word to uppercase and store that letter in
our newly made storage
- look at each letter of the given word starting at the second letter till the end
- change all of the letters looked at to lowercase and store them in the new storage space
- check if the given word was changed and stored as Javascript, if it was true
- return JavaScript instead
*/
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i <= word.length - 1; i++) {
    newWord += word[i].toLowerCase();
  } if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
