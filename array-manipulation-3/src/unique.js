/* exported unique */
// store empty array in varible named output
// loop through the given array
// check if values of given array are not in output
// if true, push the value into output
// return output

function unique(array) {
  var output = [];

  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
