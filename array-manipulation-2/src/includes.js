/* exported includes */
/*
- look through the given list
- check if any item in the given list is equal to the given value
- if true return true
- if false return false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
