import { TreeNode } from "../common/tree-node";

/**
 * Singly Linked List
 */
export class BinaryTree<T> {
  private root: TreeNode<T>;

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

  printInOrder(): void {
    return this.printInOrderHelper(this.root);
  }

  printInOrderHelper(node: TreeNode<T>): void {
    if (node != null) {
      this.printInOrderHelper(node.left);
      process.stdout.write(node.data + ", ");
      this.printInOrderHelper(node.right);
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
}
