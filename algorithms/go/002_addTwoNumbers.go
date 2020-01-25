package algorithms

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var head, tail *ListNode

	one := 0
	for l1 != nil || l2 != nil {
		n := 0
		if l1 != nil {
			n += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			n += l2.Val
			l2 = l2.Next
		}

		n += one

		if n >= 10 {
			n = n - 10
			one = 1
		} else {
			one = 0
		}
		node := &ListNode{Val: n}
		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = node
		}
	}

	if one > 0 {
		node := &ListNode{Val: one}
		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = node
		}
	}

	return head
}
