//Graph Class representing adjacency list

function Graph() {
  var verticies = []; //1
  var adjList = new Dictionary(); //2


  this.addVertex = function(v) {
    vertices.push(v); //3
    adjList.set(v, []); //4
  };

  this.addEdge = function(v, w) {
    adjList.get(v).push(w); //5
    adjList.get(w).push(v); //6
  }

  this.toString = function() {
    var s = '';
    for (var i=0; i<vertices.length; i++) {//10
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //11
      for (var j=0; j<neighbors.length; j++) { //12
        s += neighbors[j] + ' ';
      }
      s += '\n'; //13
    }
    return s;
  };

  function Dictionary() {
    var items = {};

    this.has = function(key) {
      return key in items;
    };

    this.set = function(key, value) {
      items[key] = value;
    };

    this.remove = function(key) {
      if (this.has(key)) {
        delete items[key];
        return true;
      }
      return false;
    };

    this.get = function(key) {
      return this.has(key) ? items[key] : undefined;
    };

    this.values = function() {
      var values = [];
      for (var k in items) {
        if (this.has(k)) {
          values.push(items[k]);
        }
      }
      return values;
    };

    this.getItems = function() {
      return items;
    }
  }
}

// Implementation
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //7
for (var i=0; i<myVertices.length; i++) { //8
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //9
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


// Breadth-first search BFS Algorithm:
var initializeColor = function() {
  var color = [];
  for (var i=0; i<vertices.length; i++) {
    color[vertices[i]] = 'white'; //1
  }
  return color;
};

this.bfs = function(v, callback) {

  var color = initializeColor(), //2
      queue = new Queue(); //3
  queue.enqueue(v); //4

  while (!queue.isEmpty()) { //5
    var u = queue.dequeue(), //6
        neighbors = adjList.get(u); //7
    color[u] = 'grey'; //8
    for (var i=0; i<neighbors.length; i++) { //9
      var w = neighbors[i]; //10
      if (color[w] === 'white') { //11
        color[w] = 'grey'; //12
        queue.enqueue(w); //13
      }
    }
    color[u] = 'black'; //14
    if (callback) { //15
      callback(u);
    }
  }
};

function printNode(value) { //16
  console.log('Visited vertex: ' + value); //17
}

graph.bfs(myVertices[0], printNode); //18


//Improved BFS Method: