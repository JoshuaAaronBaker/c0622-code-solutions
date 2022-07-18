/* exported invert */
/*
- make an empty container
- look through the given source container for key
- store the key found in the source container into our new container at the source at key pos
- return the new container
*/
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
