function search(nums: number[], target: number): number {
    function binarySearch(nums: number[], target: number, low: number, high: number): number {
        const mid = Math.floor((high+low)/2)
        console.log("low"+low + "high"+high + "mid"+mid)

        if(target === nums[mid]){
            return mid
        }
        target > nums[mid]! ? low = mid+1 : high = mid - 1

        if(high < low){
            return -1
        }
        return binarySearch(nums,target,low,high)
    }

    return binarySearch(nums,target,0,nums.length-1)
};

console.log(search([-1,0,3,5,9,12],2))