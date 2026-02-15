function numIdenticalPairs(nums: number[]): number {
    const len = nums.length
    let count = 0
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
    }
    return count
};

console.log(numIdenticalPairs([1,2,3]))