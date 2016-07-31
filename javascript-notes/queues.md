# Queues
A queue is an ordered collection of items that follow the FIFO (First In First Out) or first-come-first-serve principle.

## Creating a queue

```javascript
function Queue() {

}

let items = [];
```

### Declare methods to use for queue:
- enqueue(elements(s)): Adds a new item(or several items) at the back of the queue;
- dequeue(): This removes the first item from the queue(the item in front)
- front(): Returns the first element from the queue, first one added, and the first one that will be removed from the queue. Queue is not modified, it only returns the element for information purposes, like peek() in Stack.
- isEmpty(): Returns `true` if the queue does not contain elements, `false` if the queue is bigger than 0
- size(): Returns the number of elements the queue contains, like length prperty of array.
