package algorithms

import "testing"

func TestIsValidBSTTree(t *testing.T) {
	var n11, n21, n22, n31, n32, n33 TreeNode
	n11.Val = 10
	n21.Val = 5
	n22.Val = 15
	n31.Val = 1
	n32.Val = 8
	n33.Val = 7

	n11.Left = &n21
	n11.Right = &n22
	n21.Left = &n31
	n21.Right = &n32

	n22.Right = &n33
	r := largestBSTSubtree(&n11)
	if r != 3 {
		t.Error(r)
	}

	var n4 TreeNode
	r = largestBSTSubtree(&n4)
	if r != 1 {
		t.Error(r)
	}
}
