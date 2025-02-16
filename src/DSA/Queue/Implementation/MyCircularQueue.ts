// 622. Design Circular Queue
// https://leetcode.com/problems/design-circular-queue/description/

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;
  private nodes: number;

  constructor(size: number) {
    this.head = null;
    this.tail = null;
    this.size = size;
    this.nodes = 0;
  }

  public enQueue(value: T): boolean {
    let status = false;
    if (this.nodes >= this.size) {
      return status;
    }

    if (this.tail && this.head && this.tail.next === this.head) {
      this.tail.next = new Node<T>(value);
      this.tail = this.tail.next;
      this.tail.next = this.head;
      status = true;
    }

    if (!this.head && !this.tail) {
      this.head = new Node<T>(value);
      this.tail = this.head;
      this.tail.next = this.head;
      status = true;
    }

    this.nodes++;

    return status;
  }

  public deQueue(): boolean {
    let status = false;
    if (this.nodes <= 0) {
      return status;
    }

    if (1 === this.nodes) {
      this.head = null;
      this.tail = null;
      status = true;
    }

    if (this.head && this.tail) {
      this.tail.next = this.head.next;
      this.head.next = null;

      if (this.tail === this.tail.next) {
        this.head = this.tail;
      } else {
        this.head = this.tail.next;
      }

      status = true;
    }

    this.nodes--;
    return status;
  }

  public front(): T | null {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  public rear(): T | null {
    if (!this.tail) {
      return null;
    }

    return this.tail.value;
  }

  public isEmpty(): boolean {
    return this.head === null && this.tail === null;
  }

  public isFull(): boolean {
    return this.size === this.nodes;
  }
}

class MyCircularQueue {
  private circularQueue: CircularQueue<number>;
  constructor(k: number) {
    this.circularQueue = new CircularQueue<number>(k);
  }

  enQueue(value: number): boolean {
    return this.circularQueue.enQueue(value);
  }

  deQueue(): boolean {
    return this.circularQueue.deQueue();
  }

  Front(): number {
    return this.circularQueue.front() ?? -1;
  }

  Rear(): number {
    return this.circularQueue.rear() ?? -1;
  }

  isEmpty(): boolean {
    return this.circularQueue.isEmpty();
  }

  isFull(): boolean {
    return this.circularQueue.isFull();
  }
}

export { MyCircularQueue };
