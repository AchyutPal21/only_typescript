import { BubbleSort } from "./DSA/Sorting/Algo/BubbleSort";

const arr = [
  -1, 0, -1, -2, -22, -35, -100, 5, 3, 5, 2, 5, 2, 2, 2, -1, -1, 0, 0,
];
const bubbleSort = new BubbleSort();
const sorted = bubbleSort.sort(arr);
console.log(sorted);
