// TreeNode
export class TreeNode<T> {
  data: number;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(data: number, left: TreeNode<T>, right: TreeNode<T>) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
