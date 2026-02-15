function containsDuplicate(nums: number[]): boolean {
    const freq: Record<number, number> = {};

    for(let num of nums){
        freq[num] = (freq[num] || 0)+1 
        if(freq[num] > 1) return true
    }
    return false
};

containsDuplicate([1,2,3,4])