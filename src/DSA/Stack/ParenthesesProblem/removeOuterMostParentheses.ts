function removeOuterParentheses(s: string): string {
  const n = s.length;
  const stack: string[] = [];

  let countOpen = 0;

  for (let i = 0; i < n; i++) {
    let ch = s[i];
    if (ch === "(" && countOpen++ > 0) stack.push(ch);
    if (ch === ")" && countOpen-- > 1) stack.push(ch);
  }

  return stack.join("");
}

export { removeOuterParentheses };
