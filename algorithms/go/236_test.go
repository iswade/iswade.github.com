package algorithms

import "testing"

func TestLowestCommonAncestor(t *testing.T) {
	var n11, n21, n22, n31, n32, n33, n34, n41, n42 TreeNode
	n11.Val = 3
	n11.Left = &n21
	n11.Right = &n22

	n21.Val = 5
	n21.Left = &n31
	n21.Right = &n32

	n22.Val = 1
	n22.Left = &n33
	n22.Right = &n34

	n31.Val = 6

	n32.Val = 2
	n32.Left = &n41
	n32.Right = &n42

	n33.Val = 0
	n34.Val = 8
	n41.Val = 7
	n42.Val = 4

	r := lowestCommonAncestor(&n11, &n21, &n22)
	if r.Val != 3 {
		t.Error(r)
	}

	r = lowestCommonAncestor(&n11, &n21, &n42)
	if r.Val != 5 {
		t.Error(r)
	}

	var m1, m2, m3 TreeNode
	m1.Val = 1
	m1.Left = &m2
	m1.Right = &m3
	m2.Val = 2
	m3.Val = 3

	r = lowestCommonAncestor(&m1, &m3, &m2)
	if r.Val != 1 {
		t.Error(r)
	}
}
