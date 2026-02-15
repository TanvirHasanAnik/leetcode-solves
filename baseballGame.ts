function calPoints(operations: string[]): number {
    const calculatedArr: number[] = operations.reduce((acc: any, current) => {
        if(Number.isFinite(Number(current))){
            acc.push(Number(current))
            return acc
        }

        switch (current) {
            case "+":
                acc.push(acc[acc.length - 1] + acc[acc.length - 2])
                return acc

            case "D":
                acc.push(acc[acc.length-1]*2)
                return acc
            case "C":
                acc.pop()
                return acc
        }

}, [])

return calculatedArr.reduce((acc,cur)=> acc + cur,0)

};