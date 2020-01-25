package algorithms

func mergeKLists(lists []*ListNode) *ListNode {
	if len(lists) == 0 {
		return nil
	}
	var head, tail *ListNode
	for {
		cur := 0
		found := false
		for i := 0; i < len(lists); i++ {
			if lists[i] != nil {
				if found == false {
					cur = i
				} else if lists[i].Val < lists[cur].Val {
					cur = i
				}
				found = true
			}
		}
		if found == false {
			break
		}
		node := &ListNode{lists[cur].Val, nil}
		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = node
		}
		lists[cur] = lists[cur].Next
	}
	return head
}
