// import { LinkedList } from "data-structures-ts";
import { BinaryTree } from "./tree/tree";
import * as Search from "./search/search";

let tree: BinaryTree<Number> = new BinaryTree(1);
let tree2: BinaryTree<Number> = new BinaryTree([2, 1, 3, 4, -3, 5, 0]);

console.log("---side way tree-----");
tree2.printSideways();
// console.log("----level by level----");
// tree2.printTree();

// console.log(tree);
console.log("---Inorder-----");
let inorderNumber = tree2.printInOrder();
console.log(inorderNumber);

console.log("---Preorder-----");
tree2.printPreOrder();
console.log("\n");
// same result as pre order
console.log("---dfs tree recursive-----");
Search.dfs_tree_recursive(tree2.root, 0);
console.log("\n");
console.log("---dfs tree iterative-----");
// Search.dfs_tree_iterative(tree2.root, 0);
console.log("\n");
console.log("---bfs tree iterative-----");
Search.bfs_tree_iterative(tree2.root, 0);
