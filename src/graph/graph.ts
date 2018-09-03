// adjacency matrix is similar to adjacency list in JS implementation
export class Graph<T> {
  adjMatrix: number[][];
  vertexCount: number;

  constructor(vertexCount: number) {
    this.vertexCount = vertexCount;
    this.adjMatrix = [];

    // 0 = no edge, by default
    // 1 has edge
    for (let i = 0; i < vertexCount; i++) {
      this.adjMatrix[i] = [];
    }
  }

  // get all edges of a vertex
  getEdges(vertex: number) {
    return this.adjMatrix[vertex];
  }

  addEdge(source: number, destination: number) {
    this.adjMatrix[source].push(destination);
  }

  addVertex(vertex: number) {
    if (!this.adjMatrix[vertex]) {
      this.adjMatrix[vertex] = [];
    }
  }

  vertexExist(vertex: number) {
    return !this.adjMatrix[vertex];
  }
}
