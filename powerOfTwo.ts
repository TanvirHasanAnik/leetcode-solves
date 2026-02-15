function isPowerOfTwo(n: number): boolean {
    if(n === 1) return true
    if(n%2 !== 0 || n < 1) return false
    console.log(n)
    return isPowerOfTwo(n/2)
};

console.log(isPowerOfTwo(16))