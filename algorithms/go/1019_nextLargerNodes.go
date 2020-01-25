package algorithms

func nextLargerNodes(head *ListNode) []int {
	if head == nil {
		return nil
	}

	newHead := head
	head = head.Next
	newHead.Next = nil
	for head != nil {
		node := head
		head = head.Next
		node.Next = newHead
		newHead = node
	}

	var res []int
	var stack []int
	res = append(res, 0)
	stack = append(stack, newHead.Val)
	newHead = newHead.Next
	for newHead != nil {
		for len(stack) > 0 {
			top := stack[len(stack)-1]
			if top > newHead.Val {
				break
			}
			stack = stack[0 : len(stack)-1]
		}
		if len(stack) == 0 {
			res = append(res, 0)
		} else {
			top := stack[len(stack)-1]
			res = append(res, top)
		}
		stack = append(stack, newHead.Val)
		newHead = newHead.Next
	}

	reverseArray(res)

	return res
}
