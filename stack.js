/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (this.first === null) this.first = newNode;
    if (this.first !== null) {
      newNode.next = this.first
      this.first = newNode
    }
    if (this.last === null) this.last = newNode;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first){ 
      throw new Error
    };
    let output = this.first.val;

    if(this.first == this.last) this.last == null;

    this.first = this.first.next;
    this.size -= 1;
    return output;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    let output = this.first.val;
    return output;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size > 0) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Stack;
