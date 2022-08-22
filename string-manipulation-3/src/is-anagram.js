/* exported isAnagram */
/*
- store the given strings into two separate variables and get rid of all spaces
- check if the length of the string in the first variable is not equal to the length of the
string in the second variable
- if that is true then we will return false
- if the condtion was false then we will make two other variables to store the joined strings from our
initial variables
- if they are equal to eachother then we will return true
- if they are not equal to eachother we will return false
*/
function isAnagram(firstString, secondString) {
  var string1 = firstString.replaceAll(' ', '');
  var string2 = secondString.replaceAll(' ', '');
  if (string1.length !== string2.length) {
    return false;
  } else {
    var newString1 = string1.split('').sort().join('');
    var newString2 = string2.split('').sort().join('');
    if (newString1 === newString2) {
      return true;
    } else {
      return false;
    }
  }
}
