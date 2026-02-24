function removeStars(s: string): string {
    const stringArr = s.split("")
    const stack: string[] = []
    for(const ch of stringArr){
        if(ch === "*"){
            stack.pop()
        }else{
            stack.push(ch)
        }
    }
    return stack.join("")
};

console.log(removeStars("*leet**cod*e"))