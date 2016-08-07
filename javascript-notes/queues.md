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
- size(): Returns the number of elements the queue contains, like length property of array.

```javascript
//enqueue()
this.enqueue = function(element) {
  items.push(element);
};
//adding new elements to the queue, only add new items to the end of queue;

//dequeue
this.dequeue = function() {
  return items.shift();
};
// takes first element out

// front()
this.front = function() {
  return items[0];
};

// isEmpty()
this.isEmpty = function() {
  return items.length == 0;
}

// size()
this.size = function() {
  return items.length;
}

//print()
this.print = function() {
  console.log(items.toString);
}

let queue = new Queue();

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
```
