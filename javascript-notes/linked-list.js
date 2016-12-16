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
  
  this.insert = function(position, element) {};
  this.removeAt = function(position) {};
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};

}
