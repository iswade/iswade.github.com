package algorithms

func robMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func recurRob(root *TreeNode) (sumRoot int, sumNoRoot int) {
	if root == nil {
		return 0, 0
	}

	la, lb := recurRob(root.Left)
	ra, rb := recurRob(root.Right)

	sumRoot = root.Val + lb + rb
	sumNoRoot = robMax(la, lb) + robMax(ra, rb)
	return
}

func rob(root *TreeNode) int {
	a, b := recurRob(root)
	return robMax(a, b)
}
