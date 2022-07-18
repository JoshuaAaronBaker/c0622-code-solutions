/* exported pick */
function pick(source, key) {
  var newObj = {};
  for (var prop in source) {
    for (var i = 0; i < key.length; i++) {
      if (prop === key) {
        newObj = source.prop;
      }
    }
  }
  return newObj;
}
