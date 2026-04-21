function longestSubarray(nums: number[]): number {
    let len = nums.length
    let zero = 0
    let left = 0
    let maxLen = 0
    for(let right = 0; right < len; right++){
        if(nums[right] === 0) zero++
        while(zero > 1){
            if(nums[left] === 0){
                zero--
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen
};

console.log(longestSubarray([1,1,1]))