function reverseWords(s: string): string {
    let length = s.length
    let j = length
    let arr: string[]=[]
    while(j >= -1){
        if(s[j] === ' ' || j === -1){
            if((length-j) > 1){
                arr.push(s.slice(j+1,length))
            }
            length = j
            j--
        }else{
            j--
        }
    }
    return arr.join(" ")
};
reverseWords(" the sky is    blue ")