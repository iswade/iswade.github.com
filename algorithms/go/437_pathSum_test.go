package algorithms

import "testing"

func TestPathSum(t *testing.T) {
	var n11, n21, n22, n31, n32, n33, n41, n42, n43 TreeNode

	n11.Val = 10
	n11.Left = &n21
	n11.Right = &n22
	n21.Val = 5
	n21.Left = &n31
	n21.Right = &n32
	n22.Val = -3
	n22.Right = &n33

	n31.Val = 3
	n31.Left = &n41
	n31.Right = &n42

	n32.Val = 2
	n32.Right = &n43
	n33.Val = 11

	n41.Val = 3
	n42.Val = -2
	n43.Val = 1

	r := pathSum(&n11, 8)
	if r != 3 {
		t.Error(r, 3)
	}
}

func TestPahSum02(t *testing.T) {
	var n11, n21, n22, n31, n32, n33, n41 TreeNode
	n11.Val = 1
	n11.Left = &n21
	n11.Right = &n22

	n21.Val = -2
	n21.Left = &n31
	n21.Right = &n32

	n22.Val = -3
	n22.Left = &n33
	n22.Right = nil

	n31.Val = 1
	n31.Left = &n41

	n32.Val = 3
	n33.Val = -2

	n41.Val = -1
	printBinaryTree(&n11)

	r := pathSum(&n11, -1)
	if r != 4 {
		t.Error(r, 4)
	}
}
