package algorithms

func detectCycle(head *ListNode) *ListNode {
	slow := head
	fast := head
	for {
		if fast == nil || fast.Next == nil {
			return nil
		}
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			break
		}
	}

	p1 := head
	p2 := slow
	for p1 != p2 {
		p1 = p1.Next
		p2 = p2.Next
	}

	return p1
}
