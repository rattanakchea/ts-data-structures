import { TreeNode } from "../common/tree-node";
/**
 * Singly Linked List
 */
export class BinaryTree<T> {
  root: TreeNode<T>;

  // input can be T or Array of T
  constructor(data: any) {
    if (Array.isArray(data)) {
      this.root = new TreeNode(data.shift()); //add first element
      data.forEach((item: T) => this.add(item));
    } else {
      this.root = new TreeNode(data);
    }
  }

  // insert a single item into the tree
  add(item: T) {
    // console.log("inserting: ", item);

    this.addHelper(this.root, item);
  }

  addHelper(node: TreeNode<T>, item: T) {
    if (!node) {
      node = new TreeNode(item);
    } else if (node.data > item) {
      node.left = this.addHelper(node.left, item);
    } else if (node.data < item) {
      node.right = this.addHelper(node.right, item);
    }
    // ignore duplicate data
    return node;
  }

  printInOrder(): T[] {
    let result: T[] = [];
    this.printInOrderHelper(this.root, result);
    return result;
  }

  printInOrderHelper(node: TreeNode<T>, result: T[]): void {
    if (node != null) {
      this.printInOrderHelper(node.left, result);
      this.visit(node, result);
      this.printInOrderHelper(node.right, result);
    }
  }

  private visit(node: TreeNode<T>, result: T[]): void {
    process.stdout.write(node.data + ", ");
    result.push(node.data);
  }

  printPostOrder(): void {
    return this.printPostOrderHelper(this.root);
  }

  printPostOrderHelper(node: TreeNode<T>): void {
    if (node != null) {
      this.printPostOrderHelper(node.left);
      this.printPostOrderHelper(node.right);
      process.stdout.write(node.data + ", ");
    }
  }

  printPreOrder(): void {
    return this.printPreOrderHelper(this.root);
  }

  printPreOrderHelper(node: TreeNode<T>): void {
    if (node != null) {
      process.stdout.write(node.data + ", ");
      this.printPreOrderHelper(node.left);
      this.printPreOrderHelper(node.right);
    }
  }

  printSideways(): void {
    return this.printSidewaysHelper(this.root, 0);
  }

  printSidewaysHelper(root: TreeNode<T>, level: number): void {
    if (root != null) {
      this.printSidewaysHelper(root.right, level + 1);
      for (let i = 0; i <= level; i++) {
        process.stdout.write("   ");
      }
      process.stdout.write(root.data + "\n");
      this.printSidewaysHelper(root.left, level + 1);
    }
  }

  // print tree leve-by-level. BFS ?
  printTree(): void {
    return this.printTreeHelper(this.root, 0);
  }

  printTreeHelper(root: TreeNode<T>, level: number): void {}

  // generate random tree
  random() {}

  // contains
  contains(data: T): boolean {
    return this.containsHelper(this.root, data);
  }

  // contains helper
  private containsHelper(root: TreeNode<T>, data: T): boolean {
    if (root == null) {
      return false;
    }

    if (root.data == data) return true;
    // go left
    if (root.data > data) {
      return this.containsHelper(root.left, data);
    }
    // go right
    return this.containsHelper(root.right, data);
  }

  //todo: find height of a tree
  height(): number {
    return this.heightHelper(this.root);
  }

  // height is 0 by default
  private heightHelper(node: TreeNode<T>): number {
    if (!node) return 0;

    let leftHeight = this.heightHelper(node.left);
    let rightHeight = this.heightHelper(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Test

let arr: Number[] = [2, 1, 3, 4, -3, 5, 0, 6];
let tree: BinaryTree<Number> = new BinaryTree(arr);
tree.printSideways();
console.log("find height of a tree:", tree.height());
