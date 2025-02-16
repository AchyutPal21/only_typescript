import { MyCircularQueue } from "./DSA/Queue/Implementation/MyCircularQueue";

const queue = new MyCircularQueue(8);
console.log(queue.enQueue(3));
console.log(queue.enQueue(9));
console.log(queue.enQueue(5));
console.log(queue.enQueue(0));
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue.isEmpty());
console.log(queue.isEmpty());
console.log(queue.Rear());
console.log(queue.Rear());
console.log(queue.deQueue());
