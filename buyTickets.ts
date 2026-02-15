function timeRequiredToBuy(tickets: number[], k: number): number {
    
  const t = tickets[k];
  let time = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) time += Math.min(tickets[i]!, t!);
    else time += Math.min(tickets[i]!, t! - 1);
  }

  return time;
};

console.log(timeRequiredToBuy([2,3,2],2))



//   const q: Array<[number, number]> = tickets.map((t, idx) => [t, idx]);
//   let time = 0;

//   while (q.length > 0) {
//     const [remaining, idx] = q.shift()!; 
//     const newRemaining = remaining - 1;
//     time++;

//     if (idx === k && newRemaining === 0) return time;

//     if (newRemaining > 0) q.push([newRemaining, idx]);
//   }

//   return time;