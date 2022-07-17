/* exported take */
/*
- make an empty list
- check if the given count is bigger than the length of the given list
- if true make count the same as the length og the given list
- look through the given list up until the specified count
- store the items in the given list into our new empty one
- return the new list
*/
function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
