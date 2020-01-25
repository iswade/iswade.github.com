package algorithms

func arrayMaxIndex(nums []int) int {
	if len(nums) == 0 {
		return -1
	}

	index := 0
	max := nums[0]
	for i, num := range nums {
		if num > max {
			max = num
			index = i
		}
	}
	return index
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	idx := arrayMaxIndex(nums)
	if idx == -1 {
		return nil
	}
	node := &TreeNode{nums[idx], nil, nil}
	node.Left = constructMaximumBinaryTree(nums[0:idx])
	node.Right = constructMaximumBinaryTree(nums[idx+1:])
	return node
}
