

class MyCircularQueue {
    private queue: number[]
    private front: number
    private rear: number
    private size: number
    private count: number

    constructor(k: number) {
        this.queue = new Array(k).fill(0)
        this.size = k
        this.front = 0
        this.rear = -1
        this.count = 0
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false

        this.rear = (this.rear + 1) % this.size
        this.queue[this.rear] = value
        this.count++
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false

        this.front = (this.front + 1) % this.size
        this.count--
        return true
    }

    Front(): number {
        if (this.isEmpty()) return -1
        return this.queue[this.front]!
    }

    Rear(): number {
        if (this.isEmpty()) return -1
        return this.queue[this.rear]!
    }

    isEmpty(): boolean {
        return this.count === 0
    }

    isFull(): boolean {
        return this.count === this.size
    }
}


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */