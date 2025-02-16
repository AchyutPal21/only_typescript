// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/submissions/

class MyStack<T> {
  private stack: T[];
  constructor() {
    this.stack = [];
  }

  public push(item: T): void {
    this.stack.push(item);
  }

  public pop(): T | undefined {
    if (!this.stack.length) return;

    return this.stack.pop();
  }

  public top(): T | undefined {
    if (!this.stack.length) return;
    return this.stack.at(this.stack.length - 1);
  }

  public size(): number {
    return this.stack.length;
  }

  public empty(): boolean {
    return this.stack.length === 0;
  }
}

class MyQueue {
  private stackOne: MyStack<number>;
  private stackTwo: MyStack<number>;

  constructor() {
    this.stackOne = new MyStack<number>();
    this.stackTwo = new MyStack<number>();
  }

  private transferStackItems() {
    while (!this.stackOne.empty()) {
      this.stackTwo.push(this.stackOne.pop()!);
    }
  }

  push(x: number): void {
    this.stackOne.push(x);
  }

  pop(): number {
    if (this.stackTwo.empty()) {
      this.transferStackItems();
    }

    return this.stackTwo.pop() || -1;
  }

  peek(): number {
    if (this.stackTwo.empty()) {
      this.transferStackItems();
    }

    return this.stackTwo.top() || -1;
  }

  empty(): boolean {
    return this.stackOne.empty() && this.stackTwo.empty();
  }
}

export { MyQueue };
