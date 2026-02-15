function twoSum(numbers: number[], target: number): number[] {
    let i = 0
    let k = numbers.length - 1
    while(true){
        const sum = numbers[i]! + numbers[k]!
        if(sum === target){
            return [i+1,k+1]
        }
        if(sum < target){
            i++
        }else{
            k--
        }
    }
};

console.log(twoSum([2,3,4],6))

