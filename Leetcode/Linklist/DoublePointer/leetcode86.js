let partition = function(head, x){
    let pro =head;
    let big = new ListNode(-1);
    let small = new ListNode(-1);
    let bigHead = big;
    let smallHead = small;
    while(pro){
        if(pro.val<x){
            small.next = pro;
            small = small.next;
        }
        else{
            big.next = pro;
            big = big.next;
        }
        pro = pro.next;
    }

    big.next = null;

    small.next = bigHead.next;
    return smallHead.next;
}
