function findMaxLength(nums: number[]): number {
    const firstIndex = new Map<number, number>();
    firstIndex.set(0, -1);

    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 1 ? 1 : -1;

        if (firstIndex.has(sum)) {
            maxLen = Math.max(maxLen, i - firstIndex.get(sum)!);
        } else {
            firstIndex.set(sum, i);
        }
    }

    return maxLen;
}
