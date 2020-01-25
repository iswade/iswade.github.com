package algorithms

import "testing"

func TestSortList(t *testing.T) {
	var n1, n2, n3, n4 ListNode
	n1.Val = 1
	n2.Val = 2
	n3.Val = 3
	n4.Val = 4
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4

	r := sortList(&n1)
	printListNode(r)
}

func TestSortList1(t *testing.T) {
	var n1, n2, n3, n4, n5 ListNode
	n1.Val = -1
	n2.Val = 5
	n3.Val = 3
	n4.Val = 4
	n5.Val = 0
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n3.Next = &n4
	n4.Next = &n5

	r := sortList(&n1)
	printListNode(r)
}
