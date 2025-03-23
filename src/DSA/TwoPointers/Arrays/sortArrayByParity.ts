function sortArrayByParity(nums: number[]): number[] {
  // Approach
  // Will use two pointer:
  // left pointer will find odd and for even will move
  // right pointer will find even and for odd will move
  const ln = nums.length;
  let left = 0;
  let right = ln - 1;

  while (left < right) {
    // move the left pointer when found an even element
    while (left < right && (nums[left]! & 1) === 0) {
      left++;
    }

    // move the right pointer when found an odd element
    while (right > left && (nums[right]! & 1) === 1) {
      right--;
    }

    if (left < right) {
      let temp = nums[left]!;
      nums[left] = nums[right]!;
      nums[right] = temp;
      left++;
      right--;
    }
  }

  return nums;
}

export { sortArrayByParity };
