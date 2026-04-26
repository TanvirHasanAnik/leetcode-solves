const { buildLinkedList } = require('./buildLinkedList');

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function pairSum(head: ListNode | null): number {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr = slow;

    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let first = head;
    let second = prev;
    let maxSum = 0;

    while (second) {
        maxSum = Math.max(maxSum, first!.val + second.val);
        first = first!.next;
        second = second.next;
    }

    return maxSum;
};

console.log(pairSum(buildLinkedList([5,4,2,1])))