import { ListNode } from "../common/list-node";

/**
 * Singly Linked List
 */
export class LinkedList<T> {
  private head: ListNode<T> = null;
  private tail: ListNode<T> = null;

  constructor(data = null) {
    // number or string
    if (typeof data !== "object") {
      this.head = new ListNode(data);
      this.tail = this.head;
      return;
    }

    // array
    if (typeof data == "object") {
      this.head = new ListNode(data[0]);
      this.tail = this.head;

      for (let i = 1; i < data.length; i++) {
        this.add(data[i]);
      }
    }
  }

  // add element to the end
  add(data: T): void {
    this.tail.next = new ListNode<T>(data);
    this.tail = this.tail.next;
  }

  toString(): string {
    let current: ListNode<T> = this.head;
    let result = "";
    while (current) {
      result += current.data + "->";
      current = current.next;
    }
    result += current;
    return result;
  }

  toArray(): number[] {
    let current: ListNode<T> = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  size(): number {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }

    return size;
  }
}
