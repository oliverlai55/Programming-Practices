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

this.BFS = function(v) {

  var color = initializeColor(),
      queue = new Queue(),
      d = [], //1  --the distance
      pred = []; //2 --the predecessors
  queue.enqueue(v);

  for (var i=0; i<vertices.length; i++) { //3
    d[vertices[i]] = 0; //4
    pred[vertices[i]] = null; //5
  }

  while (!queue.isEmpty()) {
    var u = queue.dequeue(),
        neighbors = adjList.get(u);
    color[u] = 'grey';
    for (i=0; i<neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        color[w] = 'grey';
        d[w] = d[u] + 1; //6
        pred[w] = u; //7
        queue.enqueue(w);
      }
    }
    color[u] = 'black';
  }
  return { //8
    distances: d,
    predecessors: pred
  };
};


var shortestPathA = graph.BFS(myVertices[0]);

var fromVertex = myVertices[0]; //9
for (var i=1; i<myVertices.length; i++) { //10
  var toVertex = myVertices[i], //1
      path = new Stack(); //12
  for (var v=toVertex; v!==fromVertex;
          v=shortestPathA.predecessors[v]) {//13
      path.push(v); //14
  }
  path.push(fromVertex); //15
  var s = path.pop(); //16
  while (!path.isEmpty()) { //17
    s += ' - ' + path.pop(); //18
  }
  console.log(s); //19
}



// Depth-first search (DFS)
// Traverse depth then backtrack then follow next path

//To visit vertex v:
// Mark v as discovered (grey)
// For all unvisited (white) neighbors w of v:
  // Visit vertex w.
// Mark v as exploreed (black)

this.dfs = function(callback) {
  var color = initializeColor(); //1

  for (var i=0; i<vertices.length; i++) { //2
    if (color[vertices[i]] = 'white') {//3
      dfsVisit(vertices[i], color, callback); //4
    }
  }
};

var dfsVisit = function(u, color, callback) {
  color[u] = 'grey'; //5
  if (callback) { //6
    callback(u);
  }
  var neighbors = adjList.get(u); //7
  for (var i=0; i<neighbors.length; i++) { //8
    var w = neighbors[i]; //9
    if (color[w] === 'white') { //10
      dfsVisit(w, color, callback); //11
    }
  }
  color[u] = 'black'; //12
};


// We can add more functionality
//After the DFS algo traverses all vertices of G, it outputs
// 2 arrays: discovery time and finish explorer time
// The discovery time d[u] of u
// The finish time f[u] when u is marked black
// The predecessors p[u] of u

var time = 0; //1
this.DFS = function() {
  var color = initializeColor(), //2
    d = [],
    f = [],
    p = [];
  time = 0;

  for (var i=0; i<vertices.length; i++) { //3
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (i=0; i<vertices.length; i++) {
    if (color[vertices[i]] === 'white') {
      DFSVisit(vertices[i], color, d, f, p);
    }
  }
  return { //4
    discovery: d,
    finished: f,
    predecessors: p
  };
};

var DFSVisit = function(u, color, d, f, p) {
  console.log('discovered ' + u);
  color[u] = 'grey';
  d[u] = ++time; //5
  var neighbors = adjList.get(u);
  for (var i=0; i<neighbors.length; i++) {
    var w = neighbors[i];
    if (color[w] === 'white') {
      p[w] = u; //6
      DFSVisit(w, color, d, f, p);
    }
  }
  color[u] = 'black';
  f[u] = ++time; //7
  console.log('explored ' + u);
};
