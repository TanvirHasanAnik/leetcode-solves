function smallerNumbersThanCurrent(nums: number[]): number[] {
    // const len = nums.length
    // const result = new Array(len).fill(0);
    // //let count = 0
    // for(let i = 0; i < len; i++){
    //     for(let j = 0; j < len; j++){
    //         if(nums[j]! < nums[i]!){
    //             result[i] += 1
    //         }
    //     }
    //     //result.push(count)
    //     //count = 0
    // }
    // return result

    const pair = nums.map((value, index) => ({value, index}))
    pair.sort((a,b) => a.value - b.value)

    const result = new Array(nums.length).fill(0);
    for(let i = 0; i < pair.length; i ++){
        result[pair[i]?.index!] = i
    }
    return result
};

console.log(smallerNumbersThanCurrent([6,5,4,8]))