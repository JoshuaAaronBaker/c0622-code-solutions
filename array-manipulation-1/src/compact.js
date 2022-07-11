/* exported compact */
/*
- make a new list to store the values that are permitted(truthy values)
- look through the given list
- check for values that are not truthy
- put the truthy values into the permitted list
- return the permitted list
*/
function compact(array) {
  var permitted = [];
  for (var i = 0; i <= array.length; i++) {
    if (array[i]) {
      permitted.push(array[i]);
    }
  }
  return permitted;
}
