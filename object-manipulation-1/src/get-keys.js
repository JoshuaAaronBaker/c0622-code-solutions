/* exported getKeys */
/*
- make a list to store our items
- loop through the given object and look at the keys  in the object
- put those keys into our list
- return the list
*/
function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
