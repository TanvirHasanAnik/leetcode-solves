
type stackNode = {
    value: number
    min: number
}

class MinStack {
    private stack: stackNode[]
    constructor() {
        this.stack = []
    }

    push(val: number): void {
        if(this.stack.length === 0){
            const newNode: stackNode = {
                value: val,
                min: val
            }
                this.stack.push(newNode)
        }else{
            const prevMin = this.getMin()
            this.stack.push({
                value: val,
                min: Math.min(val, prevMin)
            })
        }
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        const lastNode = this.stack[this.stack.length - 1]!
        return lastNode.value
    }

    getMin(): number {
        const lastNode = this.stack[this.stack.length - 1]!
        return lastNode.min
    }
}

const obj = new MinStack()

obj.push(5)
console.log(obj.top())
obj.push(2)
console.log(obj.top())
obj.push(4)
console.log(obj.top())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */