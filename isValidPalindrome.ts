function isPalindrome(s: string): boolean {
  const isAlphaNum = (ch: string) => {
    const c = ch.charCodeAt(0);
    return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
  };

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !isAlphaNum(s[i]!)) i++;
    while (i < j && !isAlphaNum(s[j]!)) j--;

    if (i >= j) break;

    const ci = s[i];
    const cj = s[j];

    if (ci!.toLowerCase()!== cj!.toLowerCase()) return false;

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))


// let alphaNumeric = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     let alphaNumericArr = alphaNumeric.split("")
//     let temp = ''
//     let length = alphaNumericArr.length
//     for(let i = 0; i < Math.floor(length/2); i++){
//         temp = alphaNumericArr[i]!
//         alphaNumericArr[i] = alphaNumericArr[length - 1 - i]!
//         alphaNumericArr[length - 1 - i] = temp!
//     }
    
//     if(alphaNumeric === alphaNumericArr.join("")){
//         return true
//     }else{
//         return false
//     }