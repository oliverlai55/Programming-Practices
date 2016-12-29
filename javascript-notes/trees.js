//BinarySearch Tree
function BinarySearchTree() {

  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  this.insert = function(key) {
    var newNode = new Node(key); //1

    if (root === null) { //2
      root = newNode;
    } else {
      insertNode(root, newNode); //3
    }


    var insertNode = function(node, newNode) {
      if (newNode.key < node.key) { //4
          if (node.left === null) {//5
            node.left = newNode; //6
          } else {
            insertNode(node.left, newNode); //7
          }
      } else {
          if (node.right === null) { //8
            node.right = newNode; //9
          } else {
            insertNode(node.right, newNode); //10
          }
      }
    };
  };
}

// In-order traversal
this.inOrderTraverse = function(callback) {
  inOrderTraverseNode(root, callback); //1
};

var inOrderTraverseNode = function(node, callback) {
  if (node !== null) {//2
    inOrderTraverseNode(node.left, callback)//3
    callback(node.key); //4
    inOrderTraverseNode(node.right, callback); //5
  }
}

function printNode(value) {//6
  console.log(value);
}

tree.inOrderTraverse(printNode); //7
