/* exported sumAll */
/*
- look through each number in the list
- grab each number
*/
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
