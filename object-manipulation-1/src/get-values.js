/* exported getValues */
/*
- make a list to store our items in
- loop through given object and look at the values of the keys
- put those values into our list
- return the list
*/
function getValues(object) {
  var newArray = [];
  for (var keys in object) {
    newArray.push(object[keys]);
  }
  return newArray;
}
