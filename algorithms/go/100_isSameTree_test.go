package algorithms

import "testing"

func TestIsSameTree(t *testing.T) {
	r := isSameTree(nil, nil)
	if r != true {
		t.Error(r)
	}

	var n1 TreeNode
	r = isSameTree(&n1, nil)
	if r != false {
		t.Error(r)
	}

	r = isSameTree(nil, &n1)
	if r != false {
		t.Error()
	}

	var n2 TreeNode
	n1.Val = 1
	n2.Val = 2
	n1.Left = &n2

	var m1, m2 TreeNode
	m1.Right = &m2
	r = isSameTree(&n1, &m1)
	if r != false {
		t.Error()
	}

	m1.Val = 1
	m2.Val = 2
	r = isSameTree(&n1, &m1)
	if r != false {
		t.Error()
	}

	n1.Left = nil
	n1.Right = &n2
	r = isSameTree(&n1, &m1)
	if r != true {
		t.Error()
	}
}
