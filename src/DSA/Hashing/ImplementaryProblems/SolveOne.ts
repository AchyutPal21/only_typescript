// 2956. Find Common Elements Between Two Arrays
// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

class SolveOne {
  public findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const hashSet1 = new Set<number>(nums1);
    const hashSet2 = new Set<number>(nums2);

    const ans: [number, number] = [0, 0];

    for (let i = 0; i < nums1.length; i++) {
      if (hashSet2.has(nums1[i]!)) {
        ans[0] += 1;
      }
    }

    for (let i = 0; i < nums2.length; i++) {
      if (hashSet1.has(nums2[i]!)) {
        ans[1] += 1;
      }
    }

    return ans;
  }
}

export { SolveOne };
