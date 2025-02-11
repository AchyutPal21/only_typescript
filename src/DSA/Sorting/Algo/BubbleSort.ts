class BubbleSort {
  public sort(numArray: number[]): number[] {
    const arr = [...numArray];
    const length = numArray.length;
    if (1 === length) return arr;

    let isSwap = false;

    for (let i = 0; i < length - 1; ++i) {
      isSwap = false;
      for (let j = 0; j < length - 1 - i; ++j) {
        if (arr[j]! > arr[j + 1]!) {
          this.swap(j, j + 1, arr);
          isSwap = true;
        }
      }

      if (!isSwap) {
        break;
      }
    }

    return arr;
  }

  private swap(ith: number, jth: number, arr: number[]) {
    let temp = arr[ith]!;
    arr[ith] = arr[jth]!;
    arr[jth] = temp;
  }
}

export { BubbleSort };
