/* exported equal */

// check if the length of the first and second array are NOT equal
// if they are not equal then return false
// if the are equal, loop through the first array and check if its contents are equal to that of the second array
// if contents are not equal, return false
// else return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}
