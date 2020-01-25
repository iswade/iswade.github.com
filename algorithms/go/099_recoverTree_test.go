package algorithms

import "testing"

func TestRecTree(t *testing.T) {
	var n1, n2, n3 TreeNode
	n1.Val = 1
	n2.Val = 3
	n3.Val = 2
	n1.Left = &n2
	n2.Right = &n3
	recoverTree(&n1)
}

func TestRecTree1(t *testing.T) {
	var n1, n2, n3, n4 TreeNode
	n1.Val = 3
	n2.Val = 1
	n3.Val = 4
	n4.Val = 2
	n1.Left = &n2
	n1.Right = &n3
	n3.Left = &n4
	recoverTree(&n1)
}
