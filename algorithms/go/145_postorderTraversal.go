package algorithms

func reverseArray(s []int) []int {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}
	return s
}
func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	var out []int
	var stack []*TreeNode
	stack = append(stack, root)

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[0 : len(stack)-1]
		out = append(out, node.Val)
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
	}

	return reverseArray(out)
}
