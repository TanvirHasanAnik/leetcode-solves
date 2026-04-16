function maxOperations(nums: number[], k: number): number {
    const map = new Map();
    let count = 0;

    for (let num of nums) {
        let complement = k - num;

        if ((map.get(complement) || 0) > 0) {
            count++;

            map.set(complement, map.get(complement) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};

console.log(maxOperations([1,2,3,4],5))