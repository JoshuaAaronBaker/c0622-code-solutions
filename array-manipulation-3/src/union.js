/* exported union */
// assign an empty array into the variable output
// loop through the first array
// check if the values of the first array are NOT in output
// if true, push the value into output
// loop through the second array
// check if the values of the second array are NOT in output
// if true, push the value into output
// return output

function union(first, second) {
  var output = [];

  for (var i = 0; i < first.length; i++) {
    if (!output.includes(first[i])) {
      output.push(first[i]);
    }
  }
  for (var f = 0; f < second.length; f++) {
    if (!output.includes(second[f])) {
      output.push(second[f]);
    }
  }
  return output;
}
