package algorithms

func hasNodes(head *ListNode, k int) bool {
	i := 0
	for head != nil && i < k {
		i++
		head = head.Next
	}

	if i == k {
		return true
	}

	return false
}

func reverseNodes(head *ListNode, k int) (new, last, res *ListNode) {
	new = nil
	last = nil
	res = nil
	cur := head
	for i := 0; i < k; i++ {
		if new == nil {
			new = cur
			last = cur
			res = cur.Next
			cur.Next = nil
			cur = res
		} else {
			res = cur.Next
			cur.Next = nil
			cur.Next = new
			new = cur
			cur = res
		}
	}

	return
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	cur := head
	var newHead *ListNode
	var NewLast *ListNode
	for {
		if hasNodes(cur, k) == true {
			new, last, res := reverseNodes(cur, k)
			if newHead == nil {
				newHead = new
				NewLast = last
				cur = res
			} else {
				NewLast.Next = new
				NewLast = last
				cur = res
			}
		} else {
			if newHead == nil {
				newHead = cur
				NewLast = cur
			} else {
				NewLast.Next = cur
			}
			break
		}
	}

	return newHead
}
