/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newVal = new Node(val);
    if (head === null) {
      this.head = newVal;
      this.tail = newVal;
    } else if (head) {
      this.tail.next = newVal;
      this.tail = newVal;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //account for if list is empty currently,
    let newVal = new Node(val);

    if (head === null) {
      this.head = newVal;
      this.tail = newVal;

    } else if (head) {
      newVal.next = this.head;
      this.head = newVal;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let tailToRemove;

    if (this.length === 0) {
      throw new Error("List is empty.");
    }

    if (this.head === this.tail) {
      tailToRemove = this.tail;
      this.tail === null;
      this.head === null;
    } else {
      for (let node of this) {
        if (node.next === this.tail) {
          tailToRemove = this.tail;
          node.next = null;
          this.tail = node;
        }
      }
    }

    this.length--;

    return tailToRemove.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let headToRemove;

    if (this.length === 0) {
      throw new Error("List is empty.");
    }

    if (this.head === this.tail) {
      headToRemove = this.tail;
      this.tail === null;
      this.head === null;
    } else {
      headToRemove = this.head;
      this.head = this.head.next;
    }

    this.length--;
    return headToRemove;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
