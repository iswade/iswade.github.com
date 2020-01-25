package algorithms

func getTreeNodeCount(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return getTreeNodeCount(root.Left) + getTreeNodeCount(root.Right) + 1
}

func largestBSTSubtreeHelper(root *TreeNode, res *int) int {
	if root == nil {
		return 0
	}

	if isValidBST(root) {
		tmp := getTreeNodeCount(root)
		if tmp > *res {
			*res = tmp
		}
	}
	largestBSTSubtreeHelper(root.Left, res)
	largestBSTSubtreeHelper(root.Right, res)
	return *res
}

func largestBSTSubtree(root *TreeNode) int {
	res := 0
	res = largestBSTSubtreeHelper(root, &res)
	return res
}
