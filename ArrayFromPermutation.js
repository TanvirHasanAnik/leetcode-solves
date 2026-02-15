function buildArray(nums) {
    var permNums = [];
    for (var i = 0; i < nums.length; i++) {
        permNums.push(nums[nums[i]]);
    }
    return permNums;
}
;
console.log(buildArray([5, 0, 1, 2, 3, 4]));
