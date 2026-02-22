function uniqueOccurrences(arr: number[]): boolean {
    const occurrence: Record<number, number> = {}
    for(const num of arr){
        occurrence[num] = (occurrence[num] ?? 0) + 1
    }
    const occurrenceValues = Object.values(occurrence)
    return checkDistinct(occurrenceValues)
};

function checkDistinct(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]!) !== i) {
            return false;
        }
    }
    return true;
}

console.log(uniqueOccurrences([1,2]))