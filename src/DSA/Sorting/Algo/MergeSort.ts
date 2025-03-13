/*
  Merge sort take TimeComplexity of O(n log(n)) SC: O(n)
*/

class MergeSort {
  public static sort(arr: number[]) {
    if (arr.length <= 1) return;
    this.mergeSort(arr, 0, arr.length - 1);
  }

  private static merge(
    arr: number[],
    left: number,
    mid: number,
    right: number
  ): void {
    let i = left;
    let j = mid + 1;
    const temp: number[] = [];

    // subarray is sorted
    while (i <= mid && j <= right) {
      if (arr[i]! < arr[j]!) {
        temp.push(arr[i++]!);
      } else {
        temp.push(arr[j++]!);
      }
    }

    while (i <= mid) {
      temp.push(arr[i++]!);
    }

    while (j <= right) {
      temp.push(arr[j++]!);
    }

    // copy back to the array
    for (let k = 0; k < temp.length; k++) {
      arr[left + k] = temp.at(k)!;
    }
  }

  private static mergeSort(arr: number[], left: number, right: number) {
    if (left >= right) return;

    let mid = Math.floor(left + (right - left) / 2);
    this.mergeSort(arr, left, mid);
    this.mergeSort(arr, mid + 1, right);
    this.merge(arr, left, mid, right);
  }
}

export { MergeSort };
