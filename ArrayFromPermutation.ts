function buildArray(nums: number[]): number[] {
    let permNums: number[] = []
    let length = nums.length
    if(length > 0){
        for(let i = 0; i < length; i++){
            permNums.push(nums[nums[i]!]!)
        }
    }
    return permNums
};

console.log(buildArray([5,0,1,2,3,4]))