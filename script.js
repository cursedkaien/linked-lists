class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }

  prepend(value) {
    const newNode = new Node(value);
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
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
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
      result += `( ${current.value} ) ->`;
      current = current.nextNode;
    }
    return result + "null";
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
