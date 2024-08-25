var deleteMiddle = function(head) {
        // 定义快慢指针和记录指针
        if(head.next === null){
            return null
        }
        
        let record = new ListNode(null,head);
        let slow = record;
        let fast = record;
        while(fast.next&&fast.next.next ){
            slow = slow.next;
            fast = fast.next.next;
            

        }
        slow.next = slow.next.next;
        return head;

};