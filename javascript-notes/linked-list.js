// Linked list

function LinkedList() {

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function(element) {
    var node = new Node(element),
    current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      //loop the list until find last item
      while (current.next) {
        current = current.next;
      }

      //get last item and assisn next to node to make the link
      current.next = node;
    }

    length++;
  };

  this.insert = function(position, element) {

    //check for out of bounds values
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {

        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++;

      return true;

  } else {
    return false;
  }
};

  this.removeAt = function(position) {

    //check for out-of-bounds values
    if (position > -1 && position < length) {

      var current = head,
        previous,
        index = 0;

      //removing first item
      if (position === 0) {
        head = current.next;
      } else {

          while (index++ < position) {

            previous = current;
            current = current.next;
          }

          //link previous with current's next: skip it to remove
          previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };


  this.indexOf = function(element) {

    var current = head,
        index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function() {
    return length === 0;
  };


  this.size = function() {};

  this.toString = function() {

    var current = head,
        string = '';

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  };

  this.print = function() {};

}



// Doubly Linked lists
function DoublyLinkedList() {

  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;
  var tail = null;

  this.insert = function(position, element) {

    //check for out of bounds values
    if (position >= 0 && position <= length) {
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) { //add on first position
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) { //last item
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }

      length++;

      return true;
    } else {
      return false;
    }
  }


  this.removeAt = function(position) {

    //look for out of bounds values
    if (position > -1 && position < length) {
      var current = head,
          previous,
          index = 0;

      // removing first item
      if (position === 0) {
        head = current.next; //(1)

        //if there is only one item, update tail
        if (length === 1) { //(2)
          tail = null;
        } else {
          head.prev = null; //(3)
        }
      } else if (position === length-1) { //last item
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {

        while (index++ < position) { //(5)
          previous = current;
          current = current.next;
        }

        //link previous with current's next - skip it
        previous.next = current.next; //(6)
        current.next.prev = previous;
      }

      length--;

      return current.element;

    } else {
      return null;
    }
  };
};
