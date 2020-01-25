package algorithms

func mergeList(l1, l2 *ListNode) *ListNode {
	var head, tail *ListNode
	for l1 != nil && l2 != nil {
		var node *ListNode
		if l1.Val <= l2.Val {
			node = l1
			l1 = l1.Next
		} else {
			node = l2
			l2 = l2.Next
		}

		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = node
		}
	}

	l := l1
	if l == nil {
		l = l2
	}

	tail.Next = l

	return head
}

func splitList(head *ListNode, count int) (first, mid *ListNode) {
	cur := head
	var prev *ListNode
	for i := 0; i < count; i++ {
		prev = cur
		cur = cur.Next
	}
	prev.Next = nil
	return head, cur
}

func sizeList(head *ListNode) int {
	count := 0
	for head != nil {
		count++
		head = head.Next
	}
	return count
}

func sortList(head *ListNode) *ListNode {
	size := sizeList(head)
	if size <= 1 {
		return head
	}

	first, mid := splitList(head, size/2)
	first = sortList(first)
	mid = sortList(mid)
	return mergeList(first, mid)
}
