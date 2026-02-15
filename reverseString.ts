function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    function rev(left: number, right: number, s:string[]){
        if(left >= right){
            return
        }
        let temp = s[left]
        s[left] = s[right]!
        s[right] = temp!

        rev(++left, --right, s)
    }

    rev(left,right,s)
    console.log(s)
    // let newS: string[] = [];
    // for(let i = s.length - 1; i >= 0; i--){
    //     newS.push(s[i]!)
    // } 
    // for(let i = 0; i < s.length; i++){
    //     s[i] = newS[i]!
    // } 
    // console.log(s)
};
reverseString(["h","e","l","l","o"])