function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const tArr = t.split("");
    for (const ch of s) {
        const i = tArr.indexOf(ch);
        if (i === -1) return false;
        tArr.splice(i, 1);           
    }
    return tArr.length === 0;
};

console.log(isAnagram("anagram","nagaram"))