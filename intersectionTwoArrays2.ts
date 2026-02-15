function intersect(nums1: number[], nums2: number[]): void {
    const leftFreq: Record<number, number> = {}
    const result = []
    for(const element of nums1){
        leftFreq[element] = (leftFreq[element]||0) + 1
    }

    for(const element of nums2){
        if(leftFreq[element]){
            leftFreq[element]--
            result.push(element)
        }
    }
    console.log(result)
};

intersect([4,9,5],[9,4,9,8,4])