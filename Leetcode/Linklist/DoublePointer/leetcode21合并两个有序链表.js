var mergeTwoLists = function (list1, list2) {
  // 定义链表结构来存储新数组
  var result = new ListNode(0);
  // 当前链表位置
  var c = result;

  // l1，和 l2 比较厚较小加入reslut
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      c.next = list2;
      list2 = list2.next;
    } else {
      c.next = list1;
      list1 = list1.next;
    }
    c = c.next;
  }

  if (list1 !== null) {
    c.next = list1;
  }

  if (list2 !== null) {
    c.next = list2;
  }

  return result.next;
};
