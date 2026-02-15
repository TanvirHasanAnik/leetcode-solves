function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0
    let pos = 0
    for(let j=1; j < nums.length; j++){
        if(nums[pos] !== nums[j]){
            pos++
            nums[pos] = nums[j]!
        }
    }
    return pos+1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))