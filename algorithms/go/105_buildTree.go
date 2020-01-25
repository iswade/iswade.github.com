package algorithms

func recurBuildTree(preOrder, inOrder []int) *TreeNode {
	if len(preOrder) == 0 {
		return nil
	}

	val := preOrder[0]
	index := 0
	for i := 0; i < len(inOrder); i++ {
		if inOrder[i] == val {
			index = i
			break
		}
	}

	node := &TreeNode{val, nil, nil}
	node.Left = recurBuildTree(preOrder[1:index+1], inOrder[0:index])
	node.Right = recurBuildTree(preOrder[index+1:], inOrder[index+1:])
	return node
}

func buildTree(preOrder []int, inOrder []int) *TreeNode {
	return recurBuildTree(preOrder, inOrder)
}
