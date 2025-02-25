/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 */

function fibMemorization(memo: number[], n: number): number {
  if (memo[n] !== 0) return memo[n]!;

  memo[n] = fibMemorization(memo, n - 1) + fibMemorization(memo, n - 2);
  return memo[n];
}

export function fib(n: number): number {
  if (n <= 0) return 0;

  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  if (n > 1) memo[2] = 1;

  return fibMemorization(memo, n);
}
