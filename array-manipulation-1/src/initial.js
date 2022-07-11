/* exported initial */
/*
- make a new list to store items
- look trhough the given list and ignore the final item inside it
- take all the items before the final one and put them into our new list
- return our new list
*/
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
