/* exported intersection */
// assign an empty array into output
// loop through the first array
// check if the values of the second array are in the first array
// if true, push the value of the first array into output
// return output

function intersection(first, second) {
  var output = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  return output;
}
