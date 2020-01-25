package algorithms

import (
	"fmt"
	"testing"
)

func TestPostorderTraversal(t *testing.T) {
	var n1, n2, n3 TreeNode
	n1.Val = 1
	n2.Val = 2
	n3.Val = 3
	n1.Right = &n2
	n2.Left = &n3
	r := postorderTraversal(&n1)
	fmt.Println(r)

	var n4 TreeNode
	n4.Val = 4
	n1.Left = &n2
	n1.Right = &n3
	n2.Left = nil
	n2.Right = nil
	n3.Left = &n4
	r = postorderTraversal(&n1)
	fmt.Println(r)
}
