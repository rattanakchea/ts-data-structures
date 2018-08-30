import { BinaryTree } from "./tree";

let tree: BinaryTree<Number>;
let arr: Number[] = [1, 2, 3, 4];

beforeEach(() => {
  tree = new BinaryTree(arr);
});

test("initializes tree", () => {
  expect(tree).toBeDefined();
});

test("contains data: true", () => {
  expect(tree.contains(2)).toEqual(true);
});

test("contains data: false", () => {
  expect(tree.contains(5)).toEqual(false);
});
