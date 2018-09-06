## Tree traversal

Pre-order: visit each node first, then its children. recursive left subtree, then recursive right subtree.

Post-order: visit node's children first, then the node itself.

In-order (for binary trees only): visit left subtree, node, right subtree

### Examples

```
     A
  B    C
D  E  F  G
```

Pre-order: A B D E C F G
Post-order: D E B F G C A
In-order: D B E A F C G

**Interesting Note**
In pre-order A (root) will always be the **first** to be visited.
In post-order A (root) will always be the **last** to be visited.
In in-order traversal, the result will be sorted for binary search tree.

## Depth first search (DFS)

DFS is closely related to Pre-order traversal of a tree.
Pre-order, In-order, Post-order are different types of DFS in binary tree.

**Fun Fact**

- make use of a stack
- can be implemented iteratively or recursively
- when acyclic graph (i.e tree) we don't need to keep track of visited nodes
- We can use DFS for a binary tree, a graph implemented in adjacency list or matrix.

## Breadth first search (DFS)

Travel the tree or graph level-by-level.
**Fun Fact**

- make use of a queue
  <!-- - can be implemented iteratively or recursively -->

## References

https://www.cs.bu.edu/teaching/c/tree/breadth-first/
https://github.com/forked-repos/algo-data-structures
