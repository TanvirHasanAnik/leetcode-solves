function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const key = str.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(str);
    }

    return Array.from(map.values());
}

// function checkAnagram(str1: string,str2: string,): boolean {
//     const str1Len = str1.length
//     const str2Len = str2.length

//     if (str1Len !== str2Len) return false;
//     const freq: Record<string,number> = {}

//     for(const char of str1){
//         freq[char] = (freq[char] || 0) + 1
//     }
//     console.log(freq)
//     for(const char of str2){
//         if(!freq[char]) return false
//         freq[char]--
//     }
//     return true
// }

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))