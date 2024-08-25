// 定义链表节点类
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // 倒序返回链表的函数
  function reverseLinkedList(head) {
    let previous = null;
    let current = head;
    let nextNode = null;
    while (current !== null) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    head = previous;
    return head;
  }
  
  // 创建一个链表
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  node1.next = node2;
  node2.next = node3;
  
  // 测试倒序返回链表
  let reversedHead = reverseLinkedList(node1);
  console.log(reversedHead);