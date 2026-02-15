function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;            // pointer for last valid element in nums1
    let p2 = n - 1;            // pointer for last element in nums2
    let write = m + n - 1;     // write position (from the end)

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1]! > nums2[p2]!) {
            nums1[write] = nums1[p1]!;
            p1--;
        } else {
            nums1[write] = nums2[p2]!;
            p2--;
        }
        write--;
    }

    console.log(nums1)

};

merge([1,2,3,0,0,0],3,[2,5,6],3)