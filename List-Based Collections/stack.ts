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

  insertFirst(newNode: ListNode) {
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteFirst() {
    const toDelete = this.head;
    if (toDelete) {
      this.head = toDelete.next;
      toDelete.next = undefined;
    }
    return toDelete;
  }
}

class Stack {
  constructor(
    top: ListNode | undefined = undefined,
    public ll: LinkedList = new LinkedList(top)
  ) {}

  push(newNode: ListNode) {
    this.ll.insertFirst(newNode);
  }

  pop() {
    return this.ll.deleteFirst();
  }
}

// Test cases
// Set up some Elements
const e1 = new ListNode(1);
const e2 = new ListNode(2);
const e3 = new ListNode(3);
const e4 = new ListNode(4);

// Start setting up a Stack
const stack = new Stack(e1);

// Test stack functionality
stack.push(e2);
stack.push(e3);
console.log(stack.pop()?.value);
console.log(stack.pop()?.value);
console.log(stack.pop()?.value);
console.log(stack.pop());
stack.push(e4);
console.log(stack.pop()?.value);
