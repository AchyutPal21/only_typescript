function isEven(num: number): boolean {
  return (num & 1) === 0;
}

function sortArrayByParityII(nums: number[]): number[] {
  // Approach
  // Will use two pointer:
  // even pointer will find even element at even index only
  // odd pointer will find odd element at odd index only
  // swap when different element found at these index
  const ln = nums.length;
  let evenPtr = 0;
  let oddPtr = 1;

  while (evenPtr < ln && oddPtr < ln) {
    // move the evenPtr pointer when found an evenPtr element
    while (evenPtr < ln && isEven(nums[evenPtr]!)) {
      evenPtr += 2;
    }

    // move the oddPtr pointer when found an oddPtr element
    while (oddPtr < ln && !isEven(nums[oddPtr]!)) {
      oddPtr += 2;
    }

    if (evenPtr < ln && oddPtr < ln) {
      let temp = nums[evenPtr]!;
      nums[evenPtr] = nums[oddPtr]!;
      nums[oddPtr] = temp;
    }
  }

  return nums;
}

export { sortArrayByParityII };
