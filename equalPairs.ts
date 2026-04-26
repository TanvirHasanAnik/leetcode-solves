function equalPairs(grid: number[][]): number {
    let rowArr = grid
    let len = rowArr.length
    const columnfreq: Record<string, number> = {}

    for(let i = 0; i < len; i++){
        let column = []
        for(let j = 0; j < len; j++){
            column.push(rowArr[j]![i])
        }
        const key = column.join(',')
        columnfreq[key] = (columnfreq[key] || 0) + 1
    }
    
    let sum = 0
    for (const row of rowArr) {
        const key = row.join(',')
        sum += (columnfreq[key] || 0)
    }
    return sum
};

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))