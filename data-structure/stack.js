class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (this.size === 0) this.top = new StackNode(value);
    else {
      const pushNode = new StackNode(value);
      pushNode.next = this.top;
      this.top = pushNode;
    }
    this.size++;
  }

  getTop() {
    return this.top.value;
  }

  pop() {
    if (this.size === 0) return null;
    else {
      const popNode = this.top;
      this.top = popNode.next;
      this.size--;
      return popNode.value;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getTop());
console.log(stack.pop());
console.log(stack.getTop());
