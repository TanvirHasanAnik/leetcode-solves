function firstUniqChar(s: string): number {
    const originalString = s;

    function uniqueIndex(s: string){

        if(s.length <= 0) return - 1

        const firstChar: string = s[0]!
        const firstCharRemoved: string = s.slice(1)

        if(firstCharRemoved.includes(firstChar)){
            const newString: string = firstCharRemoved.split(firstChar).join("");
            console.log(newString)
            return uniqueIndex(newString)
        }
        else{
            return originalString.indexOf(firstChar)
        }
    }

    return uniqueIndex(s)
};

console.log(firstUniqChar("dddccdbba"))