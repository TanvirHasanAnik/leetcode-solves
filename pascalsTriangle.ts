function generate(numRows: number): number[][] {
    let arr: number[][] = [];
    if(numRows > 0){
        let latestElement = [1];
        function addArr(row: number, latestElement: number[]){
            if(row <= 0){
                return
            }
            arr.push(latestElement)

            let newElement: number[] = [1];
            if(latestElement.length >= 2){
                for(let i = 0; i < latestElement.length - 1; i++){
                    newElement.push(latestElement[i]!+latestElement[i+1]!)
                }
            }
            newElement.push(1)
            
            addArr(--row, newElement)

        }
        addArr(numRows,latestElement)
    }
    return arr
};

generate(3)