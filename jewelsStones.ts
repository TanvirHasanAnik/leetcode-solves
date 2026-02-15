function numJewelsInStones(jewels: string, stones: string): number {
    if(stones.length === 0) return 0
    let isJewel: number = jewels.includes(stones[0]!) ? 1 : 0
    return isJewel + numJewelsInStones(jewels, stones.slice(1))
};

console.log(numJewelsInStones("aA", "aAAbbbb"))