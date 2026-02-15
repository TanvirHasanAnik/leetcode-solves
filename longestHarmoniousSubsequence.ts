function findLHS(nums: number[]): number {
  const freq: Record<number, number> = {};
  let maxLen = 0;

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const keyStr in freq) {
    const key = Number(keyStr);
    if (freq[key + 1]) {
      maxLen = maxLen > (freq[key]! + freq[key + 1]!) ? maxLen : freq[key]! + freq[key + 1]!
    }
  }

  return maxLen;
}

console.log(findLHS([1,3,2,2,5,2,3,7])); 
