/* exported drop */
/*
- make a new empty list to store our items
- check if the given count is bigger than the length of the given list
- look through each item in the given list starting from the postion equal to the given count
- store the values looked at into our new list
- return the new lsit
*/
function drop(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
