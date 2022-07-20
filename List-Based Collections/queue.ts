class Queue {
  constructor(head: number | undefined = undefined, public storage: (number|undefined)[] = [head] ) {}

  enqueue(newElement: number) {
    this.storage.push(newElement)
  }

  peek() {
    return this.storage[0]
  }

  dequeue() {
    return this.storage.shift()
  }
}
    
// Setup
const q = new Queue(1)
q.enqueue(2)
q.enqueue(3)

// Test peek
// Should be 1
console.log(q.peek())

// Test dequeue
// Should be 1
console.log(q.dequeue())

// Test enqueue
q.enqueue(4)
// Should be 2
console.log(q.dequeue())
// Should be 3
console.log(q.dequeue())
// Should be 4
console.log(q.dequeue())
q.enqueue(5)
// Should be 5
console.log(q.peek())