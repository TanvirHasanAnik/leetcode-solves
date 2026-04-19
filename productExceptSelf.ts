function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i]!;
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]!;
    }

    return result;
}



// function productExceptSelf(nums: number[]): number[] {
//     let result = []
//     for (const [index, value] of nums.entries()) {
//         const product = nums.reduce(
//         (accumulator, currentValue, reduceIndex) => index === reduceIndex ? accumulator : accumulator * currentValue,
//         1);

//         result[index] = product
//     }

//     return result
// };

// console.log(productExceptSelf([-1,1,0,-3,3]))