/* exported reverseWord */
/*
- make a container to store our reversed word
- take the given word and look at each caharacter starting from the end of the word
- store each character we look at into the container
- return the reversed word in the container
*/
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
