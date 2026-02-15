function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let best = 0;

  for (const p of prices) {
    if (p < minPrice) minPrice = p;         
    else best = Math.max(best, p - minPrice); 
  }
  return best;
};

console.log(maxProfit([3,2,6,5,0,3]))