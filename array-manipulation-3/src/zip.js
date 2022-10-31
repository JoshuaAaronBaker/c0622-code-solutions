/* exported zip */
// store empty arrays in two varibles, output and array
// store the smaller length of the two given arrays
// create a loop using the length varible, which holds the shorter length of the two given arrays
// each time the loop runs, push the value of first[i] into the new array, push the value of second[i] into the new array
// push the newArray into the output variable
// clear the new array
// return the variable output

function zip(first, second) {
  var output = [];
  var newArray = [];
  var length = Math.min(first.length, second.length);

  for (var i = 0; i < length; i++) {
    newArray.push(first[i]);
    newArray.push(second[i]);
    output.push(newArray);
    newArray = [];
  }
  return output;
}
