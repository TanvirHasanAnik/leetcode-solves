function diagonalSum(mat: number[][]): number {
    let sum = 0
    let primaryCounter = 0
    let secondaryCounter = mat.length - 1
    for (const [, rowValue] of mat.entries()) {
        sum = sum + rowValue[primaryCounter]!
        primaryCounter++
    }

    
    for (const [rowIndex, rowValue] of mat.entries()) {
        rowIndex !== secondaryCounter && (sum = sum + rowValue[secondaryCounter]!)
        secondaryCounter--
    }

    return sum
};

console.log(diagonalSum([[1,2,3],
              [4,5,6],
              [7,8,9]]))