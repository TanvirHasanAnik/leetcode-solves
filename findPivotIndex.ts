function pivotIndex(nums: number[]): number {
    const length = nums.length
    const total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0
    for(let i = 0; i < length; i++){
        const rightSum = total - leftSum - nums[i]!;
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i]!
    }
    
    return -1
};

console.log(pivotIndex([-1,-1,0,1,1,0]))