package algorithms

import (
	"testing"
)

func TestFlatten(t *testing.T) {
	var n1, n2, n3, n4, n5, n6 TreeNode
	n1.Val = 1;n1.Left=&n2;n1.Right=&n5
	n2.Val = 2;n2.Left=&n3;n2.Right=&n4
	n3.Val = 3
	n4.Val = 4
	n5.Val = 5;n5.Right=&n6
	n6.Val = 6

	printBinaryTree(&n1)
	flatten(&n1)
	printBinaryTree(&n1)
}
