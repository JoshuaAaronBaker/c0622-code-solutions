/* exported swapChars */
/*
- make a container to stor new string
- look through all letters of given string
- check if the position number of a letter is equal to the given number
- if true, store the letter at the postion of the second given number
- check if the postion number of a letter is equal to the given second number
- if true, store the letter at the postion of the first given number
- if neither are true store the letters looked at
- return the container
*/
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
