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

  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};

}
