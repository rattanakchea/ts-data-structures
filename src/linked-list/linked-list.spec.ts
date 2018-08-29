import { LinkedList } from "./linked-list";

let list: LinkedList<String>;
let list2: LinkedList<number[]>;
let arr: number[] = [1, 2, 3, 4];

beforeEach(() => {
  list = new LinkedList<string>();
  list2 = new LinkedList(arr);
});

test("initializes linked list", () => {
  expect(list).toBeDefined();
});

test("newly initialized linked list should have 0 length", () => {
  expect(list.size()).toEqual(0);
});

test(
  "newly initialized linked list from array of number of size " + arr.length,
  () => {
    expect(list2.size()).toEqual(arr.length);
  }
);

test("convert linked list to array", () => {
  expect(list2.toArray()).toEqual(arr);
});

test("reverse linked list", () => {
  list2.reverse();
  expect(list2 + "").toEqual("4->3->2->1->null");
});

test("contains: should check if list contains specific data", () => {
  expect(list2.contains(2)).toEqual(true);
});
