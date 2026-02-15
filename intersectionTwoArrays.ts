function intersection(nums1: number[], nums2: number[]): number[] {
    let intersectArr: number[] = []
    nums1.forEach((num1) => {
        if(nums2.includes(num1) && !intersectArr.includes(num1))
        { 
            intersectArr.push(num1)
        }
    })
    return intersectArr
};

console.log(intersection([1,2,2,1],[2,2]))