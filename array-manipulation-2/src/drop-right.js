/* exported dropRight */
/*
- make a new empty list to store items
- check if given count is greater than the length of given list
- if true, make new empty list equal to given list
- return the new list
- look through each item of the list until the pos of given list total length minus given count
- store the looked at items in the new list
- return the new list
*/
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
    return newArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
