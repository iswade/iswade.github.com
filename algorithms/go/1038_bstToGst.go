package algorithms

func walkTreeGeSum(root *TreeNode, parentSum int) int {
	if root == nil {
		return parentSum
	}

	right := walkTreeGeSum(root.Right, parentSum)
	root.Val += right
	return walkTreeGeSum(root.Left, root.Val)
}

func bstToGst(root *TreeNode) *TreeNode {
	walkTreeGeSum(root, 0)
	return root
}
