package algorithms

import "math"

var maxSum int

func maxPathRecur(node *TreeNode) int {
	if node == nil {
		return 0
	}

	// 得到包含根节点的一条最大路径
	leftPath := maxAny(maxPathRecur(node.Left), 0)
	rightPath := maxAny(maxPathRecur(node.Right), 0)

	newPath := node.Val + leftPath + rightPath
	maxSum = maxAny(maxSum, newPath)
	return node.Val + maxAny(leftPath, rightPath)
}

func maxPathSum(root *TreeNode) int {
	maxSum = math.MinInt64
	maxPathRecur(root)
	return maxSum
}
