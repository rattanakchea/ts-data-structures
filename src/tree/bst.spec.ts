import { BinaryTree } from "./tree";

let arr: Number[] = [2, 1, 3, 4, -3, 5, 0];
let tree: BinaryTree<Number>;

beforeEach(() => {
  // console.log("value of arr: ", arr);
  let copyArray = arr.slice(); //need to copy because there was data modification in Tree Construction
  tree = new BinaryTree(copyArray);
});

test("initializes tree", () => {
  expect(tree).toBeDefined();
});

test("contains data: true", () => {
  expect(tree.contains(2)).toEqual(true);
});

test("contains data: false", () => {
  expect(tree.contains(-100)).toEqual(false);
});

test("in order tree travel ", () => {
  let received = tree.printInOrder();
  expect(received).toEqual([-3, 0, 1, 2, 3, 4, 5]);
});
