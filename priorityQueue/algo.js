function createQueue() {
  //storing our item in an array:
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },

    dequeue() {
      return queue.pop();
    },

    peek() {
      return queue[queue.length - 1];
    },

    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

// Priority Queues

// Priority Queues are built using 2 queues. A high priority queue and a low priority queue together.

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  // Our API will be the same as a normal Queue:
  return {
    // enqueue
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    // dequeue
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        // this ensures all high priority queues are dequeued first
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    // peek
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    // length
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length; //adds the length of both the highPriority and lowPriority queues.
    },
    // isEmpty
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty(); // conjuction of both queues isEmpty methods.
    },
  };
}

// now that we've built our priority queue, let's try it out:

const q = createPriorityQueue();

q.enqueue('A page fix here');
q.enqueue('A bug fix here');
q.enqueue('A new feature here');

console.log(q.peek()); // first item logged (end of the list)
console.log(q.dequeue()); // first item removed and returned (FIFO)
console.log(q.peek()); // Second item in is logged (end of the list)

q.enqueue('Emergency tasks', true); // setting the second agrument to true, will add this string to the highPriority queue.

console.log(q.peek()); // we can see the emergency tasks is now at the front of the queue

console.log(q.dequeue()); // emergency tasks now removed.
