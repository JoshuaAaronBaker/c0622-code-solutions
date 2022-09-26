/* exported maxValue */

function maxValue(stack) {
  let value = -Infinity;

  while (typeof stack.peek() !== 'undefined') {
    value = Math.max(value, stack.pop());
  }
  return value;
}
