/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/description/
 *
 */

function pow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === 1) return x;

  let half = pow(x, n >> 1);
  return (n & 1) === 0 ? half * half : x * half * half;
}

function myPow(x: number, n: number): number {
  if (n === -2147483648) {
    return 1 / (pow(x, 2147483647) * x);
  }

  if (n < 0) return 1 / pow(x, -n);

  return pow(x, n);
}

export { myPow };
