// Compare the head of both linked lists.
// 比较两个链表的头。
// Find the smaller node among the two head nodes. The current element will be the smaller node among two head nodes.
// 找到两个头节点中较小的节点。当前元素将是两个头节点中较小的节点。
// The rest elements of both lists will appear after that.
// 两个列表的其余元素将出现在之后。
// Now run a recursive function with parameters, the next node of the smaller element, and the other head.
// 现在运行一个带有参数、较小元素的下一个节点和另一个头的递归函数。
// The recursive function will return the next smaller element linked with rest of the sorted element. Now point the next of current element to that, i.e curr_ele->next=recursivefunction()
// 递归函数将返回与已排序元素的其余部分链接的下一个较小元素。现在将当前元素的下一个指向该元素，即 curr_ele->next=recursivefunction()
// Handle some corner cases. 
// 处理一些极端情况。
// If both the heads are NULL return null.
// 如果两个头都为 NULL，则返回 null。   
// If one head is null return the other.

class Node 
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}
 
// Function to create newNode in 
// a linkedlist
function newNode(key) 
{
    temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;
}
 
// A utility function to print 
// linked list
function printList(node) 
{
    while (node != null) 
    {
        document.write(node.data+" ");
        node = node.next;
    }
}
 
// Merges two given lists in-place. 
// This function mainly compares head 
// nodes and calls mergeUtil()
function merge(h1, h2) 
{
    if (h1 == null)
        return h2;
     if (h2 == null)
         return h1;
 
     // start with the linked list
     // whose head data is the least
     if (h1.data < h2.data) 
     {
         h1.next = merge(h1.next, h2);
         return h1;
     } 
     else
     {
         h2.next = merge(h1, h2.next);
         return h2;
     }
}
 
// Driver code
head1 = newNode(1);
head1.next = newNode(3);
head1.next.next = newNode(5);
 
// 1.3.5 LinkedList created
head2 = newNode(0);
head2.next = newNode(2);
head2.next.next = newNode(4);