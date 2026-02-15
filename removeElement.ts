function removeElement(nums: number[], val: number): number {
    let i = 0;
    do {
        if(nums[i] === val){
            nums.splice(i,1)
        }else{
            i++
        }
    } while (i < nums.length);

    return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))