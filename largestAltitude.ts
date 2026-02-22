function largestAltitude(gain: number[]): number {
    let altitute = 0
    let max = 0
    for(let i = 0; i < gain.length; i++){
        altitute = altitute + gain[i]!
        if(altitute > max) max = altitute
    }
    return max
};

console.log(largestAltitude([-5,1,5,0,-7]))