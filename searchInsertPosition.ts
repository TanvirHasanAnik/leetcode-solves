function search(nums: number[], target: number): number {
    function binarySearch(nums: number[], target: number, low: number, high: number): number {
        if(high < low){
            return low
        }
        const mid = Math.floor((high+low)/2)
        console.log("low"+low + "high"+high + "mid"+mid)

        if(target === nums[mid]){
            return mid
        }
        target > nums[mid]! ? low = mid+1 : high = mid - 1
        return binarySearch(nums,target,low,high)
    }

    return binarySearch(nums,target,0,nums.length-1)
};

console.log(search([1,3,5,7],8))