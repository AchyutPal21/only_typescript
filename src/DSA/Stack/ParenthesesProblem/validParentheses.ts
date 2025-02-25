function isValid(s: string): boolean {
  const n = s.length;
  if (n === 1) return false;

  const stack: string[] = [];
  const brackets: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < n; i++) {
    let ch: string = s[i]!;

    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (brackets[ch] === stack.at(stack.length - 1)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export { isValid };
