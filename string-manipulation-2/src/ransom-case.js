/* exported ransomCase */
/*
- make a new place to store modified word
- look through all letters of the given string
- change the first letter of the given word to lowercase and store it
- look at the letters in the given word starting from the second one till the end
- check if the letter's location in the string is even or odd
- if it is even, change the letter to lowercase and store it
- if it is odd change the letter to uppercase and store it
- return the storage

*/
function ransomCase(string) {
  var newWord = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  return newWord;
}
