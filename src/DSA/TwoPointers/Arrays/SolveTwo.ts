// 2149. Rearrange Array Elements by Sign
// [https://leetcode.com/problems/rearrange-array-elements-by-sign/description/]

class SolveTwo {
  public rearrangeArray(nums: number[]): number[] {
    const ansArr = new Array<number>(nums.length).fill(0);
    let oddIdx = 1;
    let evenIdx = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i]! > 0 && evenIdx < nums.length) {
        ansArr[evenIdx] = nums[i]!;
        evenIdx += 2;
      }

      if (nums[i]! < 0 && oddIdx < nums.length) {
        ansArr[oddIdx] = nums[i]!;
        oddIdx += 2;
      }
    }

    return ansArr;
  }
}
