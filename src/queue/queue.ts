// First In First Out
export class Queue<T> {
  items: T[] = [];

  constructor() {}
  dequeue(): T {
    // return and remove first element
    return this.items.shift();
  }

  add(item: T): void {
    this.items.push(item);
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length == 0;
  }
}

let q = new Queue<number>();

q.add(1);
q.add(2);
console.log("should return 1: ", q.dequeue());
console.log("q should contains just 1 item", q);
