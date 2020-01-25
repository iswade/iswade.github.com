package algorithms

import "testing"

func TestReverseKGroup(t *testing.T) {
	var n1 ListNode
	var n2 ListNode
	var n3 ListNode
	var n4 ListNode
	var n5 ListNode
	n1.Val = 1
	n1.Next = &n2
	n2.Val = 2
	n2.Next = &n3
	n3.Val = 3
	n3.Next = &n4
	n4.Val = 4
	n4.Next = &n5
	n5.Val = 5
	n5.Next = nil

	r := reverseKGroup(&n1, 2)
	printListNode(r)
}

func TestReverseKGroup02(t *testing.T) {
	var n1 ListNode
	var n2 ListNode
	var n3 ListNode
	var n4 ListNode
	var n5 ListNode
	n1.Val = 1
	n1.Next = &n2
	n2.Val = 2
	n2.Next = &n3
	n3.Val = 3
	n3.Next = &n4
	n4.Val = 4
	n4.Next = &n5
	n5.Val = 5
	n5.Next = nil

	r := reverseKGroup(&n1, 3)
	printListNode(r)
}
