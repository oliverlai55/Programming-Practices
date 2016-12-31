function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {

  //restore constructor
  constructor: BinarySearchTree,

  traverse: function(process) {

    //helper function
    function inOrder(node) {
      if (node) {

        //traverse the left subtree
        if (node.left !== null) {
          inOrder(node.left);
        }

        //call the process method on this node
        process.call(this, node);

        //traverse the right subtree
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    //start with the root
    inOrder(this._root);
  },


  add: function (value) {
    // create a new item object, place data in
    var node = {
      value: value,
      left: null,
      right: null
    },

    //used to traverse the Structure
    current;

    //special case: no items in the tree yet
    if (this._root === null) {
      this._root = node;
    } else {
      current = this._root;

      while(true) {

        //if the new value is less than this node's value, go left
        if (value < current.value) {

          //if there's no left, then the new node belongs there
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
          //if the new value is greater than this node's value, go right
        } else if (value > current.value) {

          //if theres no right, then the new node belongs there
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }

          // if the new value is euqal to the current node, just ignore
        } else {
          break;
        }
      }
    }
  },

  contains: function(value) {
    var found = false,
        current = this._root

    //make sure there's a node to search
    while(!found && current) {

      //if the value is less than the current node's, go left
      if (value < current.value) {
          current = current.left;

      //if the value is great than the current node, go right
      } else if (value > current.value) {
        current = current.right;

      //values are euqal, found it
      } else {
        found = true;
      }
    }

    //only proceed if the node was found
    return found;
  },

  remove: function(value) {

  },

  size: function() {
    var length = 0;

    this.traverse(function(node) {
      length++;
    });

    return length
  },

  toArray: function() {
    var result = [];

    this.traverse(function(node) {
      result.push(node.value);
    });

    return result;
  },

  toString: function() {
    return this.toArray().toString();
  }
};
