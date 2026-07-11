function minEatingSpeed(piles: number[], h: number): number {
    let left = 1
    let right = Math.max(...piles)

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(isEatable(piles,h,mid)){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return left;
};

function isEatable(piles: number[], hour: number, banana: number): boolean {
    let count = 0
    piles.forEach((pile) => {
        count = count + Math.ceil(pile/banana)
    })
    return count <= hour
}

console.log(minEatingSpeed([30,11,23,4,20],6))