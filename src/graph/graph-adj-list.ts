import { V4MAPPED } from "dns";
import { Stack } from "../stack/stack";

// https://www.geeksforgeeks.org/implementation-graph-javascript/

/**
 * Graph implementation using HashMap and Set
 * V: number is the key in the map
 * E: set of edges from a vertex
 */

class Graph<V> {
  private adjList: Map<V, Set<V>>;

  constructor() {
    this.adjList = new Map<V, Set<V>>();
  }

  // add vertex to the graph
  addVertex(v: V): void {
    if (!this.adjList.has(v)) {
      let set = new Set<V>();
      this.adjList.set(v, set);
    }
  }

  // add edge between src and dest
  // @params v1: vertex1 src
  // @params v2: vertex2 dest
  addEdge(v1: V, v2: V): void {
    try {
      if (this.adjList.get(v1)) {
        this.adjList.get(v1).add(v2); // set can handle duplicate entries
      }
    } catch {
      console.error(
        "Vertex does not exist. Please first create a vertex " + v1
      );
    }
  }

  // number of vertices
  size(): number {
    return this.adjList.size;
  }

  printGraph() {
    this.adjList.forEach((edges, vertex) => {
      console.log(`Vertex ${vertex} -> ${Array.from(edges)}`);
    });
  }

  // get all the vertices
  vertices() {
    return Array.from(this.adjList.keys());
  }

  // get adjacent vertices
  edges(v: V) {
    return Array.from(this.adjList.get(v));
  }

  // implementation of BFS
  bfs(staringNode: V) {}

  // implementation of DFS
  dfs(startingNode: V, func: Function) {
    // todo: handle invalid vertex

    let visited: any = [];
    for (let v of this.vertices()) {
      visited[v] = false;
    }
    this._dfs(startingNode, visited, func);
  }

  // DFS util
  _dfs(v: V, visited: any, func: Function) {
    if (visited[v]) return;
    visited[v] = true;
    func(v);
    let edges = this.edges(v);
    // console.log("edges: ", edges);
    for (let edge of edges) {
      if (!visited[edge]) {
        // console.log("not visited yet ->", v);
        this._dfs(edge, visited, func);
      }
    }
  }

  // use a stack
  // not handle disconnected graph if use a starting node
  dfs_iterative(startingNode: V, func: Function) {
    if (!this.adjList.has(startingNode)) {
      console.error("Invalid starting node");
      return;
    }
    let visited = new Set();

    //visited[startingNode] = true;
    let stack = new Stack<V>();
    stack.push(startingNode);

    while (stack.size() > 0) {
      let node = stack.pop();
      visited.add(node);
      func(node);

      // explore all adjacent
      let edges = this.edges(node);

      for (let edge of edges) {
        if (!visited.has(edge)) stack.push(edge);
      }
    }
  }
}

// Test
let g = new Graph<string>();
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
console.log("-----all vertices", g.vertices());

function print(v: any) {
  process.stdout.write(v + ", ");
}

console.log("-----dfs recursive-------");
g.dfs("A", print);
console.log("\n");
//console.log("-----dfs iterative while loop-------");
//g.dfs_iterative("A", print);
