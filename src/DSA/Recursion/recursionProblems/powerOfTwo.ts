/**
 * 231. Power of Two
 * https://leetcode.com/problems/power-of-two/description/
 */

export function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
