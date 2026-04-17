function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let len = s.length
    let max = 0
    let count = 0

    for(let i = 0; i < len; i++){
        if(vowels.has(s[i]!.toLowerCase())){
            count++
        }

        if((i >= k) && vowels.has(s[i-k]!.toLowerCase())){
            count--
        }

        count > max && (max = count)
    }

    return max
};

console.log(maxVowels("leetcode",3))