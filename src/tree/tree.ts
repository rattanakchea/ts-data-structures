import { TreeNode } from "../common/tree-node";

/**
 * Singly Linked List
 */
export class BinaryTree<T> {
  private root: TreeNode<T>;

  constructor(data: any) {
    if (Array.isArray(data)) {
      this.root = new TreeNode(data.shift()); //add first element
      data.forEach((item: T) => this.insert(item));
    } else {
      this.root = new TreeNode(data);
    }
  }

  // insert a single item into the tree
  insert(item: T) {
    // console.log("inserting: ", item);

    this.insertHelper(item, this.root);
  }

  insertHelper(item: T, node: TreeNode<T>) {
    console.log("before: ", node);

    if (!node) {
      node = new TreeNode(item);
      console.log("root: ", this.root);
      console.log("------");

      return;
    }
    // this.root is not null
    if (node.data > item) {
      // js does not pass by reference in object when null
      if (node.left) {
        this.insertHelper(item, node.left);
      } else {
        node.left = new TreeNode(item);
      }
    } else {
      if (node.right) {
        this.insertHelper(item, node.right);
      } else {
        node.right = new TreeNode(item);
      }
    }
  }

  printInOrder(): String {
    return this.printInOrderHelper(this.root, "");
  }

  printInOrderHelper(node: TreeNode<T>, str: String): String {
    if (node == null) {
      return "";
    }
    str += this.printInOrderHelper(node.left, str) + "";
    str += node.data + " ";
    // console.log(node.data);

    str += this.printInOrderHelper(node.right, str) + "";

    return str;
  }

  // generate random tree
  random() {}

  // contains
  contains(data: T): boolean {
    return false;
  }
}
