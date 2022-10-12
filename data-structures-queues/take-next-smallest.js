/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let next = queue.dequeue();

  while (next > queue.peek()) {
    queue.enqueue(next);
    next = queue.dequeue();
  }
  return next;
}
