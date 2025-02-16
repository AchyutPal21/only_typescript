// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/description/

class MyQueue<T> {
  private q: T[];
  constructor() {
    this.q = [];
  }

  public push(item: T) {
    this.q.push(item);
  }

  public pop(): T | undefined {
    if (!this.q.length) return;

    return this.q.shift();
  }

  public top(): T | undefined {
    if (!this.q.length) return;
    return this.q.at(this.q.length - 1);
  }

  public empty(): boolean {
    return 0 === this.q.length;
  }

  public size(): number {
    return this.q.length;
  }
}

class MyStack {
  queue: MyQueue<number>;
  constructor() {
    this.queue = new MyQueue<number>();
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    for (let i = 0; i < this.queue.size() - 1; i++) {
      this.queue.push(this.queue.pop()!);
    }

    return this.queue.pop()!;
  }

  top(): number {
    return this.queue.top() || 0;
  }

  empty(): boolean {
    return this.queue.empty();
  }
}

export { MyStack };
