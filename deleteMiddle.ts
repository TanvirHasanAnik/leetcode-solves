/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}
const { buildLinkedList } = require("./buildLinkedList");

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;
    let fast: ListNode | null = head
    let slow: ListNode | null = head
    let prev: ListNode | null = null
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        prev = slow
        slow = slow?.next!
    }
    if (prev !== null) {
        prev.next = slow!.next;
    }
    return head
};

console.log(deleteMiddle(buildLinkedList([1,3,4,7,1,2,6])))