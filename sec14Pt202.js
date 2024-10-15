// October 9th, 2024
// Breadth First Search or Depth First Search Interview Questions:

// If you know a solution is not far from the root of the tree: Breadth First Search
// BFS is faster because it starts searching the nodes closest to the root first

// If the tree is very deep and solutions are rare: Breadth First Search
// We want to use BFS because DFS will take a really long time because the tree is very deep so DFS would need to go one-by-one going down each branch and because solutions are rare, it will take a long time for each traversal. We do also have to keep in mind that with BFS, we do have some memory concerns to keep in mind.

// If the tree is very wide: Depth First Search
// We want to use DFS because BFS will need to use a lot of memory. It would need to use a lot of memory because BFS uses memory to keep track of all of the nodes on its current level which in this case would be a lot due to its large width.

// If solutions are frequent but located deep in the tree: Depth First Search

// Determining whether a path exists between two nodes: Depth First Search
// This is one of the best uses of DFS

// Finding the shortest path: Breadth First Search
// 