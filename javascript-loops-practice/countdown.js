/* exported countdown */
/*
- make a list to hold numbers
- look at each number from 0 to number
- check if number is greater than or equal to 0
- store the number in the list
- subtract 1 from the number
*/
function countdown(number) {
  var newArray = [];
  for (var i = number; i >= 0; i--) {
    newArray.push(number);
    number = number - 1;
  }
  return newArray;
}
