import { LinkedList } from "data-structures-ts";
import { BinaryTree } from "./tree/tree";

let tree: BinaryTree<Number> = new BinaryTree(1);
let tree2: BinaryTree<Number> = new BinaryTree([2, 1, 3, 4, 5]);

// console.log(tree);
console.log("--------");

console.log(tree2);

let inOrder = tree2.printInOrder();

console.log("inorder: ", inOrder);
