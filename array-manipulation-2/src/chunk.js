/* exported chunk */
/*
- make an empty list to store items
- look through the given list
- divide up the list at the specified points based on given size
- store the items in new list
- return the new list
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var subArray = array.slice(i, i + size);
    newArray.push(subArray);
  }
  return newArray;
}
