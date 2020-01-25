package algorithms

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	count := 0
	right := head
	for count < n {
		count++
		right = right.Next
	}

	left := head
	var prev *ListNode
	for right != nil {
		prev = left
		left = left.Next
		right = right.Next
	}

	if prev == nil {
		head = head.Next
	} else {
		if prev.Next != nil {
			prev.Next = prev.Next.Next
		} else {
			prev.Next = nil
		}
	}
	return head
}
