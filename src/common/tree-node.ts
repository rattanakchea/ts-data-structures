// TreeNode
export class TreeNode<T> {
  data: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
