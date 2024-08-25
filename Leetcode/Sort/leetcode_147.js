let inserttionSort = function(head){
    // 判断链表为空or只有一个节点
    if(!head || !head.next) return head;

    let newHead = new ListNode(0,head);
    let lastSorted = head;
    let current = head.next;

    // 插入排序

    while(current!==null){
        if(lastSorted.val<=current.val){
            lastSorted = lastSorted.next;
        }
        else{
            let prev = newHead;
            while(prev.next.val<=current.val){
                prev = prev.next;
            }
                // 实现对current的插入
            lastSorted.next = current.next;
            current.next = prev.next;
            prev.next = current;
        }
        current = lastSorted.next;
    
    }

    return newHead.next;
};