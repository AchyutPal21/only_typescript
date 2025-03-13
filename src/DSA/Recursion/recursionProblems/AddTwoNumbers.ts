/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=recursion
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

class AddTwoNumbers {
  createNode(val: number): ListNode {
    return new ListNode(val);
  }

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
      return l2;
    }

    if (!l2) {
      return l1;
    }

    let head: ListNode | null = null;
    let currNode: ListNode | null = null;

    let ptr1: ListNode | null = l1;
    let ptr2: ListNode | null = l2;
    let carry = 0;
    let val = 0;
    let sum = 0;
    while (ptr1 || ptr2) {
      if (ptr1 && ptr2) {
        sum = ptr1.val + ptr2.val + carry;
        val = sum % 10;
        carry = Math.floor(sum / 10);

        if (head && currNode) {
          currNode.next = this.createNode(val);
          currNode = currNode.next;
        } else {
          head = this.createNode(val);
          currNode = head;
        }

        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
        continue;
      }

      if (ptr1) {
        sum = ptr1.val + carry;
        val = sum % 10;
        carry = Math.floor(sum / 10);

        if (head && currNode) {
          currNode.next = this.createNode(val);
          currNode = currNode.next;
        } else {
          head = this.createNode(val);
          currNode = head;
        }

        ptr1 = ptr1.next;
        continue;
      }

      if (ptr2) {
        sum = ptr2.val + carry;
        val = sum % 10;
        carry = Math.floor(sum / 10);

        if (head && currNode) {
          currNode.next = this.createNode(val);
          currNode = currNode.next;
        } else {
          head = this.createNode(val);
          currNode = head;
        }

        ptr2 = ptr2.next;
      }
    }

    if (currNode && carry) {
      currNode.next = this.createNode(carry);
    }

    return head;
  }
}

export { AddTwoNumbers };
