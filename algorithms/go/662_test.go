package algorithms

import "testing"

func TestWidthOfBinaryTree(t *testing.T) {
	var n1,n2,n3,n4,n5,n6 TreeNode
	n1.Val = 1
	n2.Val = 3
	n3.Val = 2
	n4.Val = 5
	n5.Val = 3
	n6.Val = 9
	n1.Left = &n2
	//n1.Right = &n3
	n2.Left = &n4
	n2.Right = &n5
	n3.Right = &n6

	r := widthOfBinaryTree(&n1)
	if r != 2 {
		t.Error(r)
	}

	r = widthOfBinaryTree(&n6)
	if r != 1 {
		t.Error(r)
	}
}