function findMin(nums: number[]): number {
    const n = nums.length
    while(nums[0]! > nums[n-1]!){
        nums.push(nums.shift()!)
    }
    return nums[0]!
};

console.log(findMin([3,4,5,1,2]))