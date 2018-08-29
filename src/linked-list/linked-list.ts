import { ListNode } from "../common/list-node";

/**
 * Singly Linked List
 */
export class LinkedList<T> {
  private head: ListNode<T> = null;
  private tail: ListNode<T> = null;

  constructor(data?: any) {
    // array
    if (data instanceof Array) {
      this.constructor_from_array(data);
    } else if (typeof data !== "undefined") {
      // number or string
      this.constructor_default(data);
    }

    // null, undefined
  }

  private constructor_default(data: T) {
    this.head = new ListNode(data);
    this.tail = this.head;
  }

  private constructor_from_array(data: T[]) {
    this.head = new ListNode(data[0]);
    this.tail = this.head;
    for (let i = 1; i < data.length; i++) {
      this.add(data[i]);
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

  toArray(): T[] {
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

  // reverse in place
  reverse(): void {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    // Until we have 'fallen off' the end of the list
    while (currentNode) {
      // Copy a pointer to the next element
      // before we overwrite currentNode.next
      nextNode = currentNode.next;

      // Reverse the 'next' pointer
      currentNode.next = previousNode;

      // Step forward in the list
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  // contains
  contains(data: T): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}
