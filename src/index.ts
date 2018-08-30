// import { LinkedList } from "data-structures-ts";
import { BinaryTree } from "./tree/tree";

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

console.log("---Postorder-----");
tree2.printPostOrder();
