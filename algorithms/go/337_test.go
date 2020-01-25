package algorithms

import "testing"

func TestRob(t *testing.T) {
	/*
	     3
	    / \
	   2   3
	    \   \
	     3   1
	*/

	var n1, n2, n3, n4, n5 TreeNode
	n1.Val = 3
	n1.Left = &n2
	n1.Right = &n3
	n2.Val = 2
	n2.Right = &n4
	n3.Val = 3
	n3.Right = &n5
	n4.Val = 3
	n5.Val = 1

	r := rob(&n1)
	if r != 7 {
		t.Error(r)
	}
}

func TestRob1(t *testing.T) {
	/*
	       3
	     /   \
	   10     2
	  /  \   / \
	 4   3  6   7
	*/

	var n11, n21, n22, n31, n32, n33, n34 TreeNode
	n11.Val = 3
	n11.Left = &n21
	n11.Right = &n22
	n21.Val = 10
	n21.Left = &n31
	n21.Right = &n32
	n22.Val = 2
	n22.Left = &n33
	n22.Right = &n34
	n31.Val = 4
	n32.Val = 1
	n33.Val = 6
	n34.Val = 7
	r := rob(&n11)
	if r != 23 {
		t.Error(r)
	}
}
