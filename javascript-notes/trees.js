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


//Pre-order traversal
this.preOrderTraverse = function(callback) {
  preOrderTraverseNode(root, callback);
};

var preOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
};

//Post-order traversal
this.postOrderTraverse = function(callback) {
  postOrderTraverse(root, callback);
};

var postOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback); //1
    postOrderTraverseNode(node.right, callback); //2
    callback(node.key); //3
  }
}


//Search for Min
this.min = function() {
  return minNode(root); //1
};

var minNode = function(node) {
  if (node) {
    while (node && node.left !== null) { //2
      node = node.left; //3
    }
    return node.key;
  }
  return null; //4
};


this.max = function() {
  return maxNode(root);
};

var maxNode = function(node) {
  if (node) {
    while (node && node.right !== null) { //5
      node = node.right;
    }

    return node.key;
  }
  return null;
};
