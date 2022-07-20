class ListNode {
  constructor(public value: number) {}
  public next: ListNode | undefined = undefined;
}

class LinkedList {
  constructor(public head: ListNode | undefined = undefined) {}

  append(newNode: ListNode): void {
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // first index is 1
  getPosition(position: number): ListNode | undefined {
    let current = this.head;

    for (let index = 1; index < position; index++) {
      if (!current?.next) {
        return current?.next;
      }
      current = current?.next;
    }

    return current;
  }

  insert(newNode: ListNode, position: number): void {
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let prev = this.head;
    let current = prev.next;

    for (let index = 2; index < position; index++) {
      if (!current) {
        break;
      }
      prev = current as ListNode;
      current = current?.next;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  delete(value: number) {
    if (!this.head) {
      return;
    }

    let next: ListNode | undefined;
    let prev: ListNode | undefined;
    let current: ListNode | undefined = this.head;
    while (current) {
      next = current?.next;

      if (current?.value === value) {
        break;
      }

      prev = current;
      current = current.next as ListNode;
    }

    if (!prev) {
      return (this.head = next);
    }

    current.next = undefined;
    prev.next = next;
  }
}

// Test cases
// Set up some Nodes
const e1 = new ListNode(1);
const e2 = new ListNode(2);
const e3 = new ListNode(3);
const e4 = new ListNode(4);

// Start setting up a LinkedList
const ll = new LinkedList(e1);
ll.append(e2);
ll.append(e3);

// Test get_position
// Should print 3
console.log(ll.head?.next?.next?.value);
// Should also print 3
console.log(ll.getPosition(3)?.value);

// Test insert
ll.insert(e4,3)
// Should print 4 now
console.log(ll.getPosition(3)?.value)

// Test delete
ll.delete(1);
// Should print 2 now
console.log(ll.getPosition(1)?.value);
// Should print 4 now
console.log(ll.getPosition(2)?.value);
// Should print 3 now
console.log(ll.getPosition(3)?.value);
