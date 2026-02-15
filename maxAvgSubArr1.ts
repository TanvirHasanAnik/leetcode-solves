function findMaxAverage(nums: number[], k: number): number {
    const len = nums.length
    let windowSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;
    
    for(let i = k; i < len; i++){
        windowSum = windowSum - nums[i-k]! + nums[i]!
        if(windowSum > maxSum){
            maxSum = windowSum
        }
    }

    return maxSum/k
};

console.log(findMaxAverage([5],1))