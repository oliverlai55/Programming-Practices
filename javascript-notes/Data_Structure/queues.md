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

function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };
  //adding new elements to the queue, only add new items to the end of queue;

  //dequeue
  this.dequeue = function() {
    return items.shift();
  };
  // takes first element out

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  }

  this.size = function() {
    return items.length;
  }

  this.print = function() {
    console.log(items.toString);
  }
}




let queue = new Queue();

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
```

### Priority Queue
```javascript

function PriorityQueue() {

  var items = [];

  function QueueElement (element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i=0; i<items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(QueueElement);
      }
    }
  }
}
```

### Hot Potato game
```javascript
function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i=0; i<nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';
  while (queue.size() > 1) {
    for (var i=0; i<num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated');
  }

  return queue.dequeue();
}
```
