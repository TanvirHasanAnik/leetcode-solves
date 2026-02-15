function missingInteger(nums: number[]): number {
    // Step 1: find the longest sequential prefix
    let sum = nums[0];
    let i = 1;
    while (i < nums.length && nums[i] === nums[i - 1]! + 1) {
        sum! += nums[i]!;
        i++;
    }

    // Step 2: put all numbers in a Set for fast lookup
    const numSet = new Set(nums);

    // Step 3: find smallest integer >= sum not in nums
    let x = sum;
    while (numSet.has(x!)) {
        x!++;
    }

    return x!;
};

console.log(missingInteger([1,2,3,2,5]))