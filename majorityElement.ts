function majorityElement(nums: number[]): Number {
    const freq: Record<number, number> = {}
    for(const element of nums){
        freq[element] = (freq[element] || 0) + 1
    }
    let maxValue = -Infinity
    let maxKey: number = -Infinity
    for(const [key, value] of Object.entries(freq)){
        if(maxValue < Number(value)){
            maxValue = Number(value)
            maxKey = Number(key)
        }
    }
    return maxKey
};

console.log(majorityElement([3,2,3]))