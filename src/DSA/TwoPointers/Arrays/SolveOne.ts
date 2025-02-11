// 2570. Merge Two 2D Arrays by Summing Values
// [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/]

class SolveOne {
  public mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const sortedArr: [number, number][] = [];

    const len_arr_1 = nums1.length;
    const len_arr_2 = nums2.length;

    let i = 0;
    let j = 0;

    while (i < len_arr_1 && j < len_arr_2) {
      const [id_1, val_1] = nums1[i] as [number, number];
      const [id_2, val_2] = nums2[j] as [number, number];

      if (id_1 === id_2) {
        sortedArr.push([id_1, val_1 + val_2]);
        i++;
        j++;
      } else if (id_1 < id_2) {
        sortedArr.push([id_1, val_1]);
        i++;
      } else {
        sortedArr.push([id_2, val_2]);
        j++;
      }
    }

    while (i < len_arr_1) {
      const [id_1, val_1] = nums1[i] as [number, number];
      sortedArr.push([id_1, val_1]);
      i++;
    }

    while (j < len_arr_2) {
      const [id_2, val_2] = nums2[j] as [number, number];
      sortedArr.push([id_2, val_2]);
      j++;
    }

    return sortedArr;
  }
}

export { SolveOne };
