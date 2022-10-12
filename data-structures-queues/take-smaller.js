/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.dequeue();

  if (typeof front === 'undefined') {
    return undefined;
  }

  const next = queue.dequeue();

  if (typeof next === 'undefined') {
    return front;
  }

  if (front > next) {
    queue.enqueue(front);
  } else {
    queue.enqueue(next);
    return front;
  }
  return next;

}
