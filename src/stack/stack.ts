// First In Last Out

export class Stack<T> {
  items: T[] = [];

  constructor() {}
  pop() {
    return this.items.pop();
  }

  push(item: T) {
    this.items.push(item);
  }
  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length == 0;
  }
}
