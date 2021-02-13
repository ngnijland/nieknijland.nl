export function split<T>(list: T[], lines: number): T[][] {
  const result: T[][] = [];
  const wordsPerLine = Math.floor(list.length / lines);

  for (let line = 0; line < lines; line++) {
    const start = line * wordsPerLine;
    result.push(list.slice(start, start + wordsPerLine));
  }

  const remainingWords = list.length % lines;

  for (let j = 0; j < remainingWords; j++) {
    result[j].push(list[lines * wordsPerLine + j]);
  }

  return result;
}
