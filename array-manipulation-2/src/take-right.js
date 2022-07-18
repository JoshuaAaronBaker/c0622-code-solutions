/* exported takeRight */
/*
- make an empty list to store our items
- check if the given count is bigger than the length of the given list
- if true, copy the list and store in our new empty list
- return the new list
- look through each item in the given list starting at the pos of total length of list minus given count
- store the values in our new empty list
- return the new list
*/
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
    return newArray;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
