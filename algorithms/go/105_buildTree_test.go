package algorithms

import "testing"

func TestBuildTree(t *testing.T) {
	pre := []int{3, 9, 20, 15, 7}
	in := []int{9, 3, 15, 20, 7}
	root := buildTree(pre, in)
	printBinaryTree(root)
}
