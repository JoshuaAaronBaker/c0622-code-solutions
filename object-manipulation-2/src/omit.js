/* exported omit */
/*
- make a new container
- look through the given source container for a key
- if the opposite of the given keys includes key
- new container at key equals given source at key
- return new obj

*/
function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
