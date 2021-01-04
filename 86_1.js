/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let curNode = head;
  let preNode;
  let preLessNode;
  let res = head;
  while (curNode != null) {
    if (curNode.val < x) {
      if (!preNode) {
        preNode = curNode;
        preLessNode = curNode;
        curNode = curNode.next;
      } else {
        if (!preLessNode) {
          let tempNode = new ListNode(curNode.val);
          tempNode.next = head;
          preLessNode = tempNode;
          res = preLessNode;
        } else {
          let tempNode = new ListNode(curNode.val);
          tempNode.next = preLessNode.next;
          preLessNode.next = tempNode;
          preLessNode = tempNode;
        }
        preNode.next = curNode.next;
        curNode = curNode.next;
      }
    } else {
      preNode = curNode;
      curNode = curNode.next;
    }
  }
  return res;
};
// partition([1, 4, 3, 2, 5, 2], 3);
