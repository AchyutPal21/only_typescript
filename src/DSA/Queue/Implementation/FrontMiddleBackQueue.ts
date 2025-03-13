class Node {
  val: number;
  next: Node | null;
  prev: Node | null;
  constructor(val: number, prev: Node | null, next: Node | null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class FrontMiddleBackQueue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  private getMiddleNode(): Node | null {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    // 1 2 3 4 5
    //     s
    //         f
    while (fast && fast.next) {
      // First middle element for even queue list
      if (fast.next && !fast.next.next) {
        return slow;
      }

      slow = slow.next!;
      fast = fast.next.next!;
    }

    return slow;
  }

  printQueue() {
    let queueItems = [];
    let ptr = this.head;
    while (ptr) {
      queueItems.push(ptr.val);
      ptr = ptr.next;
    }

    return queueItems.length ? queueItems.join(" -> ") : "";
  }

  pushFront(val: number): void {
    const node = new Node(val, null, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return;
  }

  pushMiddle(val: number): void {
    let midNode = this.getMiddleNode();
    if (!midNode) {
      return this.pushFront(val);
    }

    //   3
    // 2 6
    const node = new Node(val, midNode.prev, midNode);

    // When only one node is the queue
    if (!midNode.prev && !midNode.next) {
      midNode.prev = node;
      this.head = node;
      this.tail = midNode;

      return;
    }

    if (midNode.next) {
      midNode.next.prev = node;
    }

    midNode.next = node;

    return;
  }

  pushBack(val: number): void {
    if (!this.tail) {
      return this.pushFront(val);
    }

    const node = new Node(val, this.tail, null);
    this.tail.next = node;
    this.tail = node;
    return;
  }

  popFront(): number {
    if (!this.head) {
      return -1;
    }

    const node = this.head;
    this.head = node.next;
    if (this.head) {
      this.head.prev = null;
    }

    node.prev = node.next = null;

    return node.val;
  }

  popMiddle(): number {
    const midNode = this.getMiddleNode();
    if (!midNode) {
      return -1;
    }

    // when only one node is the queue
    if (!midNode.prev && !midNode.next) {
      this.head = this.tail = null;
      return midNode.val;
    }

    // when two node
    if (!midNode.prev && midNode.next) {
      this.head = midNode.next;
      this.tail = this.head;
      this.head.prev = null;
      return midNode.val;
    }

    const node = midNode;

    if (midNode.prev) {
      midNode.prev.next = midNode.next;
    }

    if (midNode.next) {
      midNode.next.prev = midNode.prev;
    }

    node.prev = node.next = null;

    return node.val;
  }

  popBack(): number {
    if (!this.tail) {
      return -1;
    }

    const node = this.tail;
    this.tail = node.prev;

    if (!this.tail) {
      this.head = null;
    }

    if (this.tail) {
      this.tail.next = null;
    }

    node.prev = node.next = null;
    return node.val;
  }
}

export { FrontMiddleBackQueue };
