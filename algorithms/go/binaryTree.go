package algorithms

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func printBinaryTreeHelper(root *TreeNode) {
	if root == nil {
		fmt.Printf("N ")
		return
	}

	fmt.Printf("%d ", root.Val)
	printBinaryTreeHelper(root.Left)
	printBinaryTreeHelper(root.Right)
}

func printBinaryTree(root *TreeNode) {
	queue := NewQueue()
	queue.Enqueue(root)

	for {
		node, exists := queue.Dequeue()
		if exists == false {
			break
		}

		if node.(*TreeNode) == nil {
			fmt.Printf("N ")
		} else {
			fmt.Printf("%d ", node.(*TreeNode).Val)
			queue.Enqueue(node.(*TreeNode).Left)
			queue.Enqueue(node.(*TreeNode).Right)
		}
	}

	fmt.Println()
}
