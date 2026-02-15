function twoSum(nums: number[], target: number): number[] {
    const pastValMap = new Map();
    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++){
        const currentVal = nums[currentIndex]!
        const complement = target - currentVal
        if(pastValMap.has(complement)){
            return [pastValMap.get(complement),currentIndex]
        }
        pastValMap.set(currentVal,currentIndex)
    }
    return []
};

console.log(twoSum([2,7,11,15],9))