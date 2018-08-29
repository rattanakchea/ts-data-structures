s// Stuart Reges, 2/22/06
// modified by Marty Stepp 2/23/09
//
// A basic binary tree class that includes methods to construct a random tree
// of ints and to print its data using pre-, in-, or post-order traversals.
//
// This version of IntTree stores a binary search tree, which is a tree where
// smaller elements go to the left and larger ones to the right.
// Today we wrote an add method and a contains method.
// Elements are added in the proper place to maintain the proper BST sorted order.
//
// (This class now has an "invariant" rule that elements are always placed
// into the tree with BST ordering.  We rely on this to search the tree.)

public class IntTree {
    private IntTreeNode overallRoot;
    
    // Constructs a new empty binary search tree.
    public IntTree() {
        overallRoot = null;
    }
    
    
    // Adds the given value to this binary search tree.
    public void add(int value) {
        overallRoot = add(overallRoot, value);
    }
    
    // Private helper to add the given value to this subtree.
    // The "input"  (parameter) to this method is root's current/old state.
    // The "output" (return) from this method is root's new state.
    // The state of root changes if we insert the node into this part of the tree.
    private IntTreeNode add(IntTreeNode root, int value) {
        if (root == null) {
            // base case: we have fallen off the tree,
            // so the new value should go here
            root = new IntTreeNode(value);
        } else if (root.data > value) {
            // recursive case: this value is smaller so it goes to the left.
            // Notice we must re-assign root.left to store the value returned.
            root.left = add(root.left, value);
        } else if (root.data < value) {
            // recursive case: this value is larger so it goes to the right.
            // Notice we must re-assign root.right to store the value returned.
            root.right = add(root.right, value);
        } // else it's a duplicate; so don't add it

        return root;
    }
    
    
    // Returns true if this BST contains the given integer value.
    public boolean contains(int value) {
        return contains(overallRoot, value);
    }
    
    // Recursive helper to search the given subtree for the given value.
    private boolean contains(IntTreeNode root, int value) {
        if (root == null) {
            return false;
        } else if (root.data == value) {
            // this node is the value we're looking for
            return true;
        } else if (root.data > value) {
            // this node is too large; go left
            return contains(root.left, value);
        } else {
            // root.data < value
            // this node is too small; go right
            return contains(root.right, value);
        }
    }
    
    
    // Prints the tree in a sideways indented format.
    // Elements are printed one per line, indented by 4 spaces.
    public void printSideways() {
        printSideways(overallRoot, 0);
    }
    
    // Recursive helper for printing the given subtree sideways at the
    // given level of indentation.
    private void printSideways(IntTreeNode root, int level) {
        if (root == null) {
            
        } else {
            // root != null
            printSideways(root.right, level + 1);
            for (int i = 1; i <= level * 4; i++) {
                System.out.print(" ");
            }
            System.out.println(root.data);
            printSideways(root.left, level + 1);
        }
    }
    

    // Prints an in-order traversal of this tree's elements, separated by spaces.
    // A blank line of output is produced when the tree is empty.
    public void print() {
        print(overallRoot);
        System.out.println();   // end the line of output
    }
    
    // Prints an in-order traversal of the given root node's elements, 
    // separated by spaces.  No output is produced for an empty tree.
    private void print(IntTreeNode root) {
        if (root != null) {
            print(root.left);
            System.out.print(root.data + " ");
            print(root.right);
        }
    }

    
    // Prints a pre-order traversal of this tree's elements, separated by spaces.
    // A blank line of output is produced when the tree is empty.
    public void printPreOrder() {
        printPreOrder(overallRoot);
        System.out.println();   // end the line of output
    }
    
    // Prints a pre-order traversal of the given root node's elements, 
    // separated by spaces.  No output is produced for an empty tree.
    private void printPreOrder(IntTreeNode root) {
        if (root != null) {
            System.out.print(root.data + " ");
            printPreOrder(root.left);
            printPreOrder(root.right);
        }
    }
    
    // Prints a pre-order traversal of this tree's elements, separated by spaces.
    // A blank line of output is produced when the tree is empty.
    public void printPostOrder() {
        printPostOrder(overallRoot);
        System.out.println();   // end the line of output
    }
    
    // Prints a post-order traversal of the given root node's elements, 
    // separated by spaces.  No output is produced for an empty tree.
    private void printPostOrder(IntTreeNode root) {
        if (root != null) {
            printPostOrder(root.left);
            printPostOrder(root.right);
            System.out.print(root.data + " ");
        }
    }
}
