package algorithms

import (
	"fmt"
	"testing"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func TestLevelOrder(t *testing.T) {
	var n1, n2, n3, n4, n5 TreeNode
	n1.Val = 3
	n1.Left = &n2
	n1.Right = &n3
	n2.Val = 9
	n3.Val = 20
	n3.Left = &n4
	n3.Right = &n5
	n4.Val = 15
	n5.Val = 7

	r := levelOrder(&n1)
	fmt.Println(r)
}

func TestLevelOrder02(t *testing.T) {
	r := levelOrder(nil)
	fmt.Println(r)
}
