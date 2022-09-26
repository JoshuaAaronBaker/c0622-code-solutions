/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (typeof stack.peek() === 'undefined') {
    return undefined;
  }
  const first = stack.pop();
  const second = stack.peek();
  stack.push(first);
  stack.peek(second);
  return second;
}
