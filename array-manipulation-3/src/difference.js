/* exported difference */
// assign an empty array into the variable output
// loop through the first array
// check if the values of the second array are NOT in the first array
// if true, push the value of the first array into the output
// loop through second array
// check if the values of the first array are NOT in the second array
// if true, push the value of the second array into output
// return output

function difference(first, second) {
  var output = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  for (var f = 0; f < second.length; f++) {
    if (!first.includes(second[f])) {
      output.push(second[f]);
    }
  }
  return output;
}
