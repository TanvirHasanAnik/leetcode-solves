class NumArray {
    private prefix: number[]
    constructor(nums: number[]) {
        const length = nums.length
        let prefixVar = new Array(length + 1)
        prefixVar[0] = 0
        for (let i = 0; i < length; i++) {
            prefixVar[i + 1] = prefixVar[i]! + nums[i]!;
        }
        this.prefix = [...prefixVar]
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1]! - this.prefix[left]!
    }
}

const obj = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(obj.sumRange(0, 5))

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */