package algorithms

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	node.Val = node.Next.Val
	node.Next = node.Next.Next
}

func printListNode(node *ListNode) {
	fmt.Printf("{")
	for node != nil {
		if node.Next != nil {
			fmt.Printf("%d,", node.Val)
		} else {
			fmt.Printf("%d", node.Val)
		}
		node = node.Next
	}
	fmt.Println("}")
}
