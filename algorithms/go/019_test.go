package algorithms

import "testing"

func TestRemoveNthList(t *testing.T) {
	var n1, n2, n3, n4, n5 ListNode
	n1.Val = 1
	n2.Val = 2
	n3.Val = 3
	n4.Val = 4
	n5.Val = 5
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n4.Next = &n5
	r := removeNthFromEnd(&n1, 2)
	printListNode(r)

	var n10, n11 ListNode
	n10.Val = 1
	n11.Val = 2
	n10.Next = &n11
	r = removeNthFromEnd(&n10, 1)
	printListNode(r)

	var n30 ListNode
	n30.Val = 1
	n30.Next = nil
	r = removeNthFromEnd(&n30, 1)
	printListNode(r)

	var n40, n41 ListNode
	n40.Val = 1
	n41.Val = 2
	n40.Next = &n41
	r = removeNthFromEnd(&n40, 2)
	printListNode(r)
}
