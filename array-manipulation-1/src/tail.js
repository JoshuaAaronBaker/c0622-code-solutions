/* exported tail */
/*
- make a new list to store our items
- look through the given list and ignore the first item
- put the items we looked at into the new list
- return the new list
*/
function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
