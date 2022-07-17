/* exported capitalizeWords */
/*
- make a storage space for modified string
- capitalize the first letter in given string and store it
- look through the given string and split it up whenever theres a space
- check if we are looking at a space or letter
- if it is a space we will capitalizw the letter after the space
- else we wll lowercase the letter
- add them to the storage space
- return the storage space

*/
function capitalizeWords(string) {
  var newString = '';
  newString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
