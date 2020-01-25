package algorithms

func pathSumStart(root *TreeNode, sum int) int {
	if root == nil {
		return 0
	}

	count := 0
	if root.Val == sum {
		count += 1
	}

	count += pathSumStart(root.Left, sum-root.Val)
	count += pathSumStart(root.Right, sum-root.Val)
	return count
}

func pathSum(root *TreeNode, sum int) int {
	if root == nil {
		return 0
	}

	count := 0
	count += pathSumStart(root, sum)
	count += pathSum(root.Left, sum) + pathSum(root.Right, sum)
	return count
}
