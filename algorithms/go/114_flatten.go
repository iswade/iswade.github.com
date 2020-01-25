package algorithms

func flattenHelper(root *TreeNode, last **TreeNode) {
	if root == nil {
		return
	}

	if *last != nil {
		(*last).Left = nil
		(*last).Right = root
	}

	*last = root
	tmp := root.Right
	flattenHelper(root.Left, last)
	flattenHelper(tmp, last)
}

func flatten(root *TreeNode) {
	var last *TreeNode
	flattenHelper(root, &last)
}
