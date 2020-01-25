package algorithms

import (
	"fmt"
	"testing"
)

func TestNextLargerNodes(t *testing.T) {
	var n1, n2, n3, n4, n5 ListNode
	n1.Val = 2
	n2.Val = 7
	n3.Val = 4
	n4.Val = 3
	n5.Val = 5
	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n4.Next = &n5
	r := nextLargerNodes(&n1)
	fmt.Println(r)
}
