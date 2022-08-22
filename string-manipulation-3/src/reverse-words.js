/* exported reverseWords */
/*
- make a new variable and store the given string split up without spaces
- make a new variable to srore the word while being reversed
- make an array to store final rendtion of the reversed word
- make a loop that looks through the given word
- loop through each string in arr and add letter to the end
- each time the word is reversed, push into new array and variable word is equal to empty string
- use join on array and return it from the function
*/

function reverseWords(string) {
  var newString = string.split(' ');
  var word = '';
  var newArray = [];

  for (var i = 0; i < newString.length; i++) {
    for (var j = newString[i].length - 1; j >= 0; j--) {
      word += newString[i][j];
    }
    newArray.push(word);
    word = '';
  }
  return newArray.join(' ');
}
