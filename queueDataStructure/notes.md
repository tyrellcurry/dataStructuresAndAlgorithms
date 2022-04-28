Notes!

A great use for a Queue is a plan. A plan is a collection of steps that needs to happen in a particular order to achieve a goal. We can use Queues to make our plans.

Queue methods and what they do (the function names are arbitrary names that need logic to achieve the goals, you cannot simply call enqueue and expect something to happen, we are creating the logic to make these goals possible):

```
enqueue method (add to the beginning of the array):
    enqueue(item) {
      // we always want to keep our collection in the right order.
      // we always want to add to the array array from one side, and remove from the other.

      queue.unshift(item);
      // we are adding items to the front of the array using the .unshift method. Pushing the first elements added to the end.
    },

    dequeue method (remove last/end item from the array):
    dequeue() {
      // we are removing an item from the end of our array using the .pop method to ensure our queue remains in order.
      queue.pop();
    },

    peek (returning the item that's next to be removed)
    peek() {
      return queue[queue.length - 1];
      // indexing queue with the length property, if using just the length we will be indexing too far, since it's a Zero-Based array, we negative 1 to target the last item in the array.
    },

    length property (we need to use a getter for this, if we just associate queue.length, with our length key, we will get the value 0 because that's the value of queue.length when our object is created):
    get length() {
      // we use a getter function that always returns the CURRENT queues length
      return queue.length;
    },

    is empty method (this will return a boolean if array is empty):
    isEmpty() {
      return queue.length === 0; // will return TRUE if length is 0.
    }
```
