function compress(chars: string[]): number {
  let write = 0; // Position to write in chars
  let read = 0; // Position to read in chars

  while (read < chars.length) {
    let char = chars[read]; // Current character
    let count = 0;

    // Count consecutive occurrences
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Write the character
    chars[write++] = char!;

    // Write the count if > 1
    if (count > 1) {
      for (let c of count.toString()) {
        chars[write++] = c;
      }
    }
  }

  return write; // New length of compressed array
}

export { compress };
