

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions = potions.sort((a, b) => a - b);
    let resultArr: number[] = []
    spells.forEach((spell)=>{
        const LastPotionIndex = potions.length - 1
        const minPotion = Math.ceil(success/spell)
        const minPotionIndex = binarySearch(potions, minPotion)
        if(minPotionIndex!=-1){
            resultArr.push(potions.length - minPotionIndex) 
        }else{
            resultArr.push(0)
        }
    })

    return resultArr
};

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid]! < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

console.log(successfulPairs([5,1,3],[1,2,3,4,5],7))