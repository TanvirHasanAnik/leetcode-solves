function getFrequency(leftArr: number[], rightArr: number[]):Record<number,number>{
    const freq:Record<number,number> = {}
    const n = leftArr.length
    if(n < 1){
        return freq
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            const sum = leftArr[i]! + rightArr[j]!
            freq[sum] = (freq[sum] || 0) + 1
        }
    }
    return freq
}

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let result = 0
    const leftFreq = getFrequency(nums1,nums2)
    const rightFreq = getFrequency(nums3,nums4)
    
    if (Object.keys(leftFreq).length === 0 || Object.keys(rightFreq).length === 0) {
        return result
    }

    for(const sum in leftFreq){
        if(rightFreq[-sum]){
            result += leftFreq[sum]! * rightFreq[-sum]!
        }
    }
    return result
};

console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))