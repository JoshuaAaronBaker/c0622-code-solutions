/* exported reverse */
/*
- make a new list to store our items
- look trhough the given list starting from the end
- put the items into our new list starting from the last item in the given one
- return the new list
*/
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
