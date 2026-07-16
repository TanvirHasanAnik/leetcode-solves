class StockSpanner {
    monoStack: number[][];

    constructor() {
        this.monoStack = [];
    }

    next(price: number): number {
        if(this.monoStack.length === 0){
            this.monoStack.push([price,1])
            return this.monoStack[0]![1]!
        }

        let counter = 0

        while(this.monoStack.length > 0 && price >= this.monoStack[this.monoStack.length - 1]![0]!){
            counter = counter + this.monoStack.pop()![1]!
        }
        this.monoStack.push([price,counter+1])
        return counter+1
    }
}

var obj = new StockSpanner()
var para1 = obj.next(100)
var para2 = obj.next(80)
var para3 = obj.next(60)
var para4 = obj.next(70)
var para5 = obj.next(60)
var para6 = obj.next(75)
var para7 = obj.next(85)

console.log(para6,para7)