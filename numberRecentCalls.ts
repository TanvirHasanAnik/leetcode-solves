class RecentCounter {
    recentCalls: number[]
    constructor() {
        this.recentCalls = []
    }

    ping(t: number): number {
        this.recentCalls.push(t)
        const lowerRange = t - 3000
        
        while(this.recentCalls.length && this.recentCalls[0]! < lowerRange){
            this.recentCalls.shift()
        }
        return this.recentCalls.length
    }
}

var obj = new RecentCounter()
var param_1 = obj.ping(1)
console.log(param_1)
var param_1 = obj.ping(100)
console.log(param_1)
var param_1 = obj.ping(3001)
console.log(param_1)
var param_1 = obj.ping(3002)
console.log(param_1)

