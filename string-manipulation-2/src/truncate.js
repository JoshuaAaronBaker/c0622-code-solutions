/* exported truncate */
/*
- look at the given number and string
- cut the given string at the count of the character equal to the given number
- return the string
*/
function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
