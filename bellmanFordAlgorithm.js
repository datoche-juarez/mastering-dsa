class BellmanFordGraph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }
  addEdge(src, dest, weight) {
    this.edges.push({ src, dest, weight });
  }
  bellmanFord(start) {
    const distances = {};
    const predecessor = {};

    // Step 1: Initialize distances
    for (let vertex of this.vertices) {
      distances[vertex] = Infinity;
      predecessor[vertex] = null;
    }
    distances[start] = 0;

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < this.vertices.length - 1; i++) {
      for (let edge of this.edges) {
        if (distances[edge.src] + edge.weight < distances[edge.dest]) {
          distances[edge.dest] = distances[edge.src] + edge.weight;
          predecessor[edge.dest] = edge.src;
        }
      }
    }

    // Step 3: Check for negative-weight cycles
    for (let edge of this.edges) {
      if (distances[edge.src] + edge.weight < distances[edge.dest]) {
        console.log("Graph contains a negative-weight cycle");
        return null;
      }
    }

    return { distances, predecessor };
  }
}

// Example Usage:

const vertices = ["A", "B", "C", "D", "E"];
const graph = new BellmanFordGraph(vertices);

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "B", 1);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", -5);

const result = graph.bellmanFord("A");
if (result) {
  console.log("Distances from A:", result.distances);
  console.log("Predecessors:", result.predecessor);
  // Output:
  // Distances from A: { A: 0, B: 3, C: 2, D: 4, E: -1 }
  // Predecessors: { A: null, B: 'C', C: 'A', D: 'C', E: 'D' }
}
