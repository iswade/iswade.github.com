package algorithms

import "testing"

func TestAddTwoNumbers(t *testing.T) {
	var n1, n2, n3 ListNode
	n1.Val = 2
	n2.Val = 4
	n3.Val = 9
	n1.Next = &n2
	n2.Next = &n3

	var n4, n5, n6 ListNode
	n4.Val = 5
	n5.Val = 6
	n6.Val = 9
	n4.Next = &n5
	n5.Next = &n6

	r := addTwoNumbers(&n1, &n4)
	printListNode(r)
}
