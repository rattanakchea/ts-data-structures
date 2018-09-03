import { BinaryTree } from "../tree/tree";
import { TreeNode } from "../common/tree-node";
import { Stack } from "../stack/stack";
import { Graph } from "../graph/graph";

// similar to pre-order traversal, recursive
// pseudocode
// visit each node
// for each children
//    dfs(Left subtree)
//    dfs(Right subtree)
function dfs_tree_recursive<T>(root: TreeNode<T>, value: T) {
  if (root) {
    // in tree, each will never be visited more than once
    visit(root.data, value);
    // for each children
    dfs_tree_recursive(root.left, value);
    dfs_tree_recursive(root.right, value);
  }
}

// in iterative, we use a stack
function dfs_tree_iterative<T>(root: TreeNode<T>, value: T) {
  if (!root) return;
  let stack = new Stack<TreeNode<T>>();
  stack.push(root);

  while (stack.size() > 0) {
    let node = stack.pop();
    visit(node.data, value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function visit<T>(data: T, value: T) {
  process.stdout.write(data + ", ");
  // console.log("visit:", data);
  if (data == value) {
    // console.log("found value in tree:", data);
    return true;
  }
}

// BFS in iterative, we use a queue
function bfs_tree_iterative<T>(root: TreeNode<T>, value: T) {
  if (root == null) return;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    // console.log("queue is:  ", queue);

    let node = queue.shift(); //remove first element
    // console.log("----");
    // console.log(node);

    visit(node.data, value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// vertex is the starting vertex for DFS
// for adj matrix
function dfs_graph(graph: Graph<number>, vertex: number) {
  if (!graph.vertexExist(vertex)) {
    console.log("vertex not found");
  }
  const visited = [];
  let stack = new Stack<number>();
  stack.push(vertex);

  while (stack.size() > 0) {
    let node = stack.pop();
    visited[vertex] = true;
    console.log("visit: ", vertex);

    // do for every edge
    for (let edge of graph.getEdges(vertex)) {
      if (!visited[edge]) {
        stack.push(edge);
      }
    }

    // if (node.right) stack.push(node.right);
    // if (node.left) stack.push(node.left);
  }
}

export {
  dfs_tree_recursive,
  dfs_tree_iterative,
  bfs_tree_iterative,
  dfs_graph
};
