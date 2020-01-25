package algorithms

import "math"

func recurIsValidBst(root *TreeNode, pre *int) bool {
	if root == nil {
		return true
	}

	r := recurIsValidBst(root.Left, pre)
	if r != true {
		return false
	}

	if root.Val <= *pre {
		return false
	}

	*pre = root.Val

	return recurIsValidBst(root.Right, pre)
}

func isValidBST(root *TreeNode) bool {
	pre := math.MinInt64
	return recurIsValidBst(root, &pre)
}
