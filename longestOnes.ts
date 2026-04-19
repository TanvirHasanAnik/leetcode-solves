function longestOnes(nums: number[], k: number): number {
    let len = nums.length
    let zero = 0
    let left = 0
    let maxLen = 0
    for(let right = 0; right < len; right++){
        if(nums[right] === 0) zero++
        if(zero > k){
            if(nums[left] === 0){
                zero--
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))

