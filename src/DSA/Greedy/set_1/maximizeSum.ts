/**
 * In this question we have to max the sum,
 * Becoming greedy by find the max in the array
 * sum it the value and keep increasing by k time
 *
 * TC: O(n) SC: O(1)
 *
 * @param nums
 * @param k
 */

function findMax(nums: number[]): number {
  let max = -1;
  nums.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

function maximizeSum(nums: number[], k: number): number {
  let max = findMax(nums);
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += max;
    max++;
  }
  return sum;
}

export { maximizeSum };
