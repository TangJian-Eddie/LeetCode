var addTwoNumbers = function(l1, l2) {
  let num3
  let curListNode
  let add = 0
  if(l1.val == null){
    num3 = l2
    return
  }
  if(l2.val == null){
    num3 = l1
    return
  }
  let value = l1.val + l2.val
  if((l1.val + l2.val)/10<1){
    num3 = new ListNode(value)
    curListNode = num3
  }else{
    num3 = new ListNode((l1.val + l2.val)%10)
    curListNode = num3
    add = 1
  }
  l1 = l1.next
  l2 = l2.next
  while(l1 != null || l2 != null){
    let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + add
    curListNode.next = new ListNode(sum%10)
    curListNode = curListNode.next
    add = sum/10<1 ? 0:1
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  if(add == 1){
    curListNode.next = new ListNode(1)
  }
  return num3
};