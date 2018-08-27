import { LinkedList } from "./linked-list";

let list = new LinkedList(1);

let list2 = new LinkedList([1, 2, 3, 4]);

console.log("list: " + list);
console.log("----------");
console.log("list2: " + list2);

console.log("toArray: " + list2.toArray());
