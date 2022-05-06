class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const deleted = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deleted;

    // or
    // return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    // const deleted = this.data[index];

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    // return deleted;
    return this.data;
  }
}

const arr = new ArrayList();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log(arr.data);
console.log(arr.delete(2));
