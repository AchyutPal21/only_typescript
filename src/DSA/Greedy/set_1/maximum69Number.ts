function maximum69Number(num: number): number {
  let numStr = num + "";
  numStr = numStr.replace("6", "9");
  return parseInt(numStr);
}

export { maximum69Number };
