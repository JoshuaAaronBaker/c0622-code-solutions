/* exported numVowels */
/*
- make a container to store a count
- make a list of vowels lowercase and uppercase
- look trhough each letter in the given string
- look through each item in the list of vowels
- check to see if the letters in the given string match the vowels in the list
- if true, update the count contaier by 1
- return the count container
*/
function numVowels(string) {
  var counter = 0;
  var newArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (var i = 0; i < string.length; i++) {
    for (var k = 0; k < newArray.length; k++) {
      if (string[i] === newArray[k]) {
        counter++;
      }
    }
  }
  return counter;
}
