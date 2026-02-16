function reverseVowels(s: string): string {
    const len = s.length
    const vowels = new Set(['a', 'e', 'i', 'o','u','A', 'E', 'I', 'O','U'])
    const sArr = s.split("")
    let i = 0
    let j = len - 1

    while(i < j){
        const left = vowels.has(sArr[i]!)
        const right = vowels.has(sArr[j]!)
        if(left && right){
            [sArr[i], sArr[j]] = [sArr[j]!, sArr[i]!]
            i++
            j--
        }
        if(!left){
            i++
        }
        if(!right){
            j--
        }
    }

    return sArr.join("")
};