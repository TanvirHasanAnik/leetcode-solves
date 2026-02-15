function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomFreq: Record<string, number> = {}
    const magazineFreq: Record<string, number> = {}
    if(ransomNote.length <= magazine.length){
        for(const char of ransomNote){
            ransomFreq[char] = (ransomFreq[char] || 0) + 1
        }
        for(const char of magazine){
            magazineFreq[char] = (magazineFreq[char] || 0) + 1
        }

        for(const [key,value] of Object.entries(ransomFreq)){
            if(magazineFreq[key]){
                if(magazineFreq[key] < value){
                    return false
                }
            }else {
                return false
            }
        }
        return true
    }else {
        return false
    }
};

console.log(canConstruct("bsa","bab"))