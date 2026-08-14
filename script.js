export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  tail() {
    if (this.head === null) {
      return undefined;
    }

    return this.tail.value;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === index) {
        return current.value;
      }
      current = current.nextNode;
    }
    return undefined;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.nextNode;

    if (this.head) {
      this.tail = null;
    }

    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === false) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError();
    }

    if (values.length === 0) {
      return;
    }

    if (index === 0) {
      for (const value of values.reverse()) {
        this.prepend(value);
      }
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    for (const value of values) {
      const newNode = new Node(value);
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;

      current = newNode;
    }
    if (current.nextNode === null) {
      this.tail = current;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      throw new RangeError();
    }

    if (index === 0) {
      this.pop();
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    if ((current.nextNode = this.tail)) {
      this.tail = current;
    }

    current.nextNode = current.nextNode.nextNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
