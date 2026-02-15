function isIsomorphic(s: string, t: string): boolean {
    const sMap: Record<string,string> = {}
    const tMap: Record<string,string> = {}
    for(let i = 0; i < s.length; i++){
        const sCurrent = s[i]!
        const tCurrent = t[i]!

        if((sMap[sCurrent] && sMap[sCurrent] !== tCurrent) || 
            (tMap[tCurrent] && tMap[tCurrent] !== sCurrent)){
                return false
            }
            
            sMap[sCurrent] = tCurrent
            tMap[tCurrent] = sCurrent
    }
    return true
};

console.log(isIsomorphic("badc","baba"))