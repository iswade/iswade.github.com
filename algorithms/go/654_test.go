package algorithms

import "testing"

func TestConsMaxBinaryTree(t *testing.T) {
	nums := []int{3, 2, 1, 6, 0, 5}
	root := constructMaximumBinaryTree(nums)
	printBinaryTree(root)
}
