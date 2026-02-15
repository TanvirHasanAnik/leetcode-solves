function getRow(rowIndex: number): number[] {
  const memo = new Map<string, number>();

  function pascal(r: number, c: number): number {
    if (c === 0 || c === r) return 1;

    const key = `${r},${c}`;
    if (memo.has(key)) return memo.get(key)!;

    const value = pascal(r - 1, c - 1) + pascal(r - 1, c);
    memo.set(key, value);
    return value;
  }

  const result: number[] = [];
  for (let c = 0; c <= rowIndex; c++) {
    result.push(pascal(rowIndex, c));
  }

  return result;
}
