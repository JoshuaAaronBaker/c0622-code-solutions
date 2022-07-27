/* exported firstChars */
/*
- make a container to hold characters
- check if the length provided is bigger than the length of the given string
- if true, set the provided length to the length of the given string
- look at each character in the given string up until the given length
- store each char from the given letter in our container up until the given length
- return the container
*/
function firstChars(length, string) {
  var chars = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    chars += string[i];
  }
  return chars;
}
