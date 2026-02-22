function findDifference(nums1: number[], nums2: number[]): number[][] {
    // const nums1Freq = getFrequency(nums1)
    // const nums2Freq = getFrequency(nums2)
    const nums1Unique = [...new Set(nums1)];
    const nums2Unique = [...new Set(nums2)];

    let left: number[] = []
    let right: number[] = []

    nums1Unique.forEach((element)=>{
        if(!nums2Unique.includes(element)){
            left.push(element)
        } 
    })

    nums2Unique.forEach((element)=>{
        if(!nums1Unique.includes(element)){
            right.push(element)
        } 
    })

    return [left,right]
};

// function getFrequency(arr: number[]): Record<number, number> {
//   const freq: Record<number, number> = {};

//   for (const item of arr) {
//     freq[item] = (freq[item] || 0) + 1;
//   }

//   return freq;
// }

console.log(findDifference([1,2,3,3],[1,1,2,2]))