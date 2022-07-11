/* exported toObject */
/*
- make an empty object to store given values
- place the first value in our new object as a key, place the second value into our object as a value
- return oure new object
*/
function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
