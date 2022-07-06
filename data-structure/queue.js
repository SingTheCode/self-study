class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  enqueue(value) {
    const enqueueNode = new QueueNode(value);
    if (this.size === 0) {
      this.top = enqueueNode;
      this.bottom = enqueueNode;
    } else {
      this.top.next = enqueueNode;
      this.top = enqueueNode;
    }
    this.size++;
  }

  dequeue() {
    const dequeueNode = this.bottom;
    if (this.size === 0) return null;
    if (this.size >= 1) {
      this.bottom = this.bottom.next;
      this.size--;
      return dequeueNode.value;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.top);
console.log(queue.bottom);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.front);
