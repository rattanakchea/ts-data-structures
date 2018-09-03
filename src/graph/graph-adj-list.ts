import { V4MAPPED } from "dns";

// https://www.geeksforgeeks.org/implementation-graph-javascript/

/**
 * Graph implementation using HashMap and Set
 * V: number is the key in the map
 * E: set of edges from a vertex
 */

type S = Set<number>;
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

  // get adjacent vetices
  edges(v: V) {
    return Array.from(this.adjList.get(v));
  }

  // implementation of BFS
  bfs(staringNode: V) {}

  // implementation of DFS
  dfs(staringNode: V) {
    let visited: V[] = [];

    for (let v of this.vertices()) {
      this._dfs(staringNode, visited);
    }
  }

  // DFS util
  _dfs(v: V, visited: any) {
    if (visited[v]) {
      return;
    }
    process.stdout.write(v + ", ");
    visited[v] = true;

    let edges = this.edges(v);
    for (let v of edges) {
      if (!visited[v]) {
        this._dfs(v, visited);
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
g.dfs("A");
