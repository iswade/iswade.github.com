package algorithms

import "testing"

func TestDetectCycle(t *testing.T) {
	var n1, n2, n3, n4 ListNode
	n1.Val = 1
	n2.Val = 2
	n3.Val = 3
	n4.Val = 4
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n4.Next = &n2
	r := detectCycle(&n1)
	if r.Val != 2 {
		t.Error(r)
	}
}

func TestDetectNoCycle(t *testing.T) {
	var n1, n2, n3, n4 ListNode
	n1.Val = 1
	n2.Val = 2
	n3.Val = 3
	n4.Val = 4
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	r := detectCycle(&n1)
	if r != nil {
		t.Error(r)
	}
}
