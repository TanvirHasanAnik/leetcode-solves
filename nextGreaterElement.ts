function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const next = new Map();   
  const stack = [];         

  for (const x of nums2) {
    while (stack.length && stack[stack.length - 1]! < x) {
      next.set(stack.pop(), x);
    }
    stack.push(x);
  }

  while (stack.length) next.set(stack.pop(), -1);

  return nums1.map(v => next.get(v) ?? -1);
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4],   [1,2,3,4]));
