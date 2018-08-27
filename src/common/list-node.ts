// ListNode Item
export class ListNode<T> {
  data: T;
  next: ListNode<T>;

  constructor(data?: T) {
    this.data = data || null;
    this.next = null;
  }
}
