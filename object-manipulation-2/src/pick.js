/* exported pick */
/*
- make an empty container
- look through the given source container for the given key inside the source container
- check if the given keys include the key in source and if the key in source is undefined
- if true, empty container at the key value euqals source at the key value
- return the container
*/
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
