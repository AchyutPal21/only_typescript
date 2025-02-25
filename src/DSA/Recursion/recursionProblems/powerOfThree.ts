/**
 * 326. Power of Three
 * https://leetcode.com/problems/power-of-three/description/
 *
 */

export function isPowerOfThree(n: number): boolean {
  return n > 0 && (n & (n - 1)) === n - 1;
}
