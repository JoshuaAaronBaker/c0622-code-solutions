/* exported defaults */
/*
- look through given source container for a value key
- chekc if the given target at key is the same as undefined
- store the value of source container at key in the target at key
*/
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
