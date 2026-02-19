function isSubsequence(s: string, t: string): boolean {
    const sLen = s.length
    const tLen = t.length
    let i = 0;
    let j = 0;
    while(i < sLen && j < tLen){
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    if(i === sLen){
        return true
    }else{
        return false
    }
};

console.log(isSubsequence("axc","ahbgdc"))