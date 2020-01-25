package algorithms

import "testing"

func TestMergeKLists(t *testing.T) {
	var n11, n12, n13 ListNode
	n11.Val = 1
	n11.Next = &n12
	n12.Val = 4
	n12.Next = &n13
	n13.Val = 5

	var n21, n22, n23 ListNode
	n21.Val = 1
	n21.Next = &n22
	n22.Val = 3
	n22.Next = &n23
	n23.Val = 4

	var n31, n32 ListNode
	n31.Val = 2
	n31.Next = &n32
	n32.Val = 6

	head := mergeKLists([]*ListNode{&n11, &n21, &n31})
	printListNode(head)
}
