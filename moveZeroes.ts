function moveZeroes(nums: number[]): void {
    let tempArr: number[] = []
    const zeroLess: number[] = nums.filter((num)=> {
        if(num === 0){
            tempArr.push(0)
            return false
        }else{
            return true
        }
    })

    nums.length = 0
    nums.push(...zeroLess, ...tempArr)

    console.log(nums)
};

moveZeroes([0,1,0,3,12])

// function moveZeroes(nums: number[]): void {
//     let pos: number = 0
//     for(let [i,num] of nums.entries()){
//         if(num !== 0){
//             [nums[pos]!,nums[i]!] = [nums[i]!,nums[pos]!]
//             pos++
//         }
//     }
//     console.log(nums)
// };

// moveZeroes([0,1,0,3,12])