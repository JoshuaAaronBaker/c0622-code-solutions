/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }

  while (index > 0) {
    const front = queue.dequeue();
    queue.enqueue(front);
    index--;
  }
  return queue.dequeue();
}
