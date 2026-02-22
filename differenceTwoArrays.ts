function findDifference(nums1: number[], nums2: number[]): number[][] {
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

console.log(findDifference([1,2,3,3],[1,1,2,2]))