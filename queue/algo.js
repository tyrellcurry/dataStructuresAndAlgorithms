// A Queue is a collection of items that obeys the principal of:
//First In First Out.

// When we place an item into the Queue, we can only get it out after all the other items we added before it have been removed.

// A Queue will have several methods and properties:
// add or enqueue method
// remove or dequeue method
// peek method
// length properties
// is empty method

function createQueue() {
  //storing our item in an array:
  const queue = [];

  return {
    // enqueue method (add to the beginning of the array):
    enqueue(item) {
      // we always want to keep our collection in the right order.
      // we always want to add to the array array from one side, and remove from the other.

      queue.unshift(item);
      // we are adding items to the front of the array using the .unshift method. Pushing the first elements added to the end.
    },

    // dequeue method (remove last/end item from the array):
    dequeue() {
      // we are removing an item from the end of our array using the .pop method to ensure our queue remains in order.
      queue.pop();
    },

    // peek (returning the item that's next to be removed)
    peek() {
      return queue[queue.length - 1];
      // indexing queue with the length property, if using just the length we will be indexing too far, since it's a Zero-Based array, we negative 1 to target the last item in the array.
    },

    // length property (we need to use a getter for this, if we just associate queue.length, with our length key, we will get the value 0 because that's the value of queue.length when our object is created):
    get length() {
      // we use a getter function that always returns the CURRENT queues length
      return queue.length;
    },

    // is empty method (this will return a boolean if array is empty):
    isEmpty() {
      return queue.length === 0; // will return TRUE if length is 0.
    },
  };
}

// A great use for a Queue is a plan. A plan is a collection of steps that needs to happen in a particular order to achieve a goal. We can use Queues to make our plans.

const q = createQueue(); // We are assigning our createQueue to a variable called q. The function names used above are entirely customizable along with the methods and property names.

console.log(q.isEmpty()); // we can see our Queue is currently empty (the array).

q.enqueue('Adding an item to the Queue'); // calling the enqueue method to add a string to the Queue array.

q.enqueue('Another awesome item'); // This is added to the beginning, pushing the first element to the end.

q.enqueue('Be happy'); // This is now added to the beginning, pushing the other 2 elements to the end, the first element being at the very end (First In First Out).

console.log(q.peek()); // This returns the first array item.

q.dequeue(); // removing the last element in the array - when calling this the item removed is the first element that was added above, the elements added afterwards using the enqueue method get added to the beginning of the array, meaning the first item ends up at the end.

console.log(q.peek()); // We now see the second element added, due to the first element being removed above.
