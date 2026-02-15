function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const initialValue = -Infinity;
    const highestValue = candies.reduce(
        (Max, currentValue) => currentValue > Max ? currentValue : Max,
        initialValue,
    );
    return candies.map(candy => (candy + extraCandies) >= highestValue)
};

console.log(kidsWithCandies([4,2,1,1,2],1))