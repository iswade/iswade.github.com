package algorithms

type BinaryTreeNode struct {
	node *TreeNode
	depth int
	pos int
}

func widthOfBinaryTree(root *TreeNode) int {
	var queue []*BinaryTreeNode
	queue = append(queue, &BinaryTreeNode{root,0,0})
	width := 0
	for len(queue) > 0 {
		left := 0
		right := 0
		length := len(queue)
		for i := 0; i < length; i++ {
			if i == 0 {
				left = queue[i].pos
			}

			if i == length - 1 {
				right = queue[i].pos
			}

			node := queue[i]
			if node.node.Left != nil {
				queue = append(queue, &BinaryTreeNode{node.node.Left,node.depth+1,node.pos*2})
			}
			if node.node.Right != nil {
				queue = append(queue, &BinaryTreeNode{node.node.Right,node.depth+1,node.pos*2+1})
			}
		}
		if right-left > width {
			width = right-left
		}
		if len(queue) > 0 {
			queue = queue[length:]
		}
	}

	return width+1
}