function runningSum(nums: number[]): number[] {
    let acc = 0
    for(let i = 0; i < nums.length; i++){
        acc = nums[i]! + acc
        nums[i] = acc
    }
    return nums
};

console.log(runningSum([1,2,3,4]))