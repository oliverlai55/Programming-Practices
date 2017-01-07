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
