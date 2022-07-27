/* exported lastChars */
/*
- make a container to sore characters
- check if the length given is greater than the length of the given string
- if true, make length equal to the length of the given string
- look through the given string starting at the the letter at position total length - given length
- add the characters to our contianer
- return the container
*/
function lastChars(length, string) {
  var chars = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = string.length - length; i < string.length; i++) {
    chars += string[i];
  }
  return chars;
}
