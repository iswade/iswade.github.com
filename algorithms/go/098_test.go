package algorithms

import "testing"

func TestIsValidBST(t *testing.T) {
	var n1, n2, n3 TreeNode
	n1.Val = 2
	n2.Val = 1
	n3.Val = 3
	n1.Left = &n2
	n1.Right = &n3
	r := isValidBST(&n1)
	if r != true {
		t.Error(r)
	}
}
func TestIsValidBST1(t *testing.T) {
	var n1, n2, n3, n4, n5 TreeNode
	n1.Val = 10
	n2.Val = 5
	n3.Val = 15
	n4.Val = 6
	n5.Val = 20
	n1.Left = &n2
	n1.Right = &n3
	n3.Left = &n4
	n3.Right = &n5

	r := isValidBST(&n1)
	if r != false {
		t.Error(r)
	}
}
