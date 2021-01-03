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
  while (curNode.next != null) {
    if (curNode.val < x) {
      console.log(curNode, preNode, preLessNode);
      if (!preNode) {
        preNode = curNode;
        preLessNode = curNode;
        curNode = curNode.next;
      } else {
        if (!preLessNode) {
          let tempNode = head;
          preLessNode = curNode;
          preLessNode.next = tempNode;
        } else {
          let tempNode = preLessNode.next;
          preLessNode.next = curNode;
          preLessNode = curNode;
          preLessNode.next = tempNode;
        }
        preNode.next = curNode.next;
        preNode = curNode.next;
        curNode = curNode.next;
      }
    } else {
      preNode = curNode;
      curNode = curNode.next;
    }
    // console.log(curNode, preNode);
  }
  return head;
};
partition([1, 4, 3, 2, 5, 2], 3);
