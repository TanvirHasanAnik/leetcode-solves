class MyStack {
    private queue: number[]
    constructor() {
        this.queue = []
    }

    push(x: number): void {
        this.queue.push(x)
        for(let i = 0; i < this.queue.length - 1; i ++){
            this.queue.push(this.queue.shift()!)
        }
    }

    pop(): number {
        return this.queue.shift()!
    }

    top(): number {
        return this.queue[0]!
    }

    empty(): boolean {
        if(this.queue.length > 0){
            return false
        }else{
            return true
        }
    }

    currentStack(): number[]{
        return this.queue
    }
}

var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj.currentStack())
obj.pop()
console.log(obj.currentStack())
console.log(obj.top())
console.log(obj.currentStack())

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */