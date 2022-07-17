/* exported chunk */

function chunk(array, size) {
  var subArray1 = [];
  var subArray2 = [];

  if (size > array.length) {
    return array;
  }

  for (var i = 0; i < size; i++) {
    subArray1.push(array[i]);
    for (var k = size; k < array.length; k++) {
      subArray2.push(array[k]);
    }
  }
  return subArray2;
}
