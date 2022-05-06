class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deleted = this.data[index];

    this.data[index - 1].next = this.data[index + 1];
    this.length--;

    return deleted;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  get next() {
    return this.next;
  }

  set next(val) {
    this.next = val;
  }
}
