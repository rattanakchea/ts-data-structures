import { BinaryTree } from "../tree/tree";
import { TreeNode } from "../common/tree-node";

// similar to pre-order traversal, recursive
// pseudocode
// visit each node
// for each children
//    dfs(Left subtree)
//    dfs(Right subtree)
function dfs_tree<T>(root: TreeNode<T>, value: T) {
  if (root) {
    // in tree, each will never be visited more than once
    visit(root.data, value);
    // for each children
    dfs_tree(root.left, value);
    dfs_tree(root.right, value);
  }
}

function Stack() {}

// in iterative, we use a stack
function dfs_tree_iterative<T>(root: TreeNode<T>, value: T) {
  if (!root) return;
  let stack = [];
  stack.push(root.data);

  while (stack.length > 0) {
    let d = stack.pop();
    visit(d, value);
    if (root.left) stack.push(root.left.data);
    if (root.right) stack.push(root.right.data);
  }
}

function visit<T>(data: T, value: T) {
  console.log("visit:", data);
  if (data == value) {
    console.log("found value in tree:", data);
  }
  // process.stdout.write(data + ", ");
}

export { dfs_tree, dfs_tree_iterative };
