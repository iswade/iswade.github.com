package algorithms

import "math"

/*
此题的关键在于找到两个错误节点,分两种情况:
(1)如果中序遍历出现了两次降序,那么第一个错误结点是第一次降序时较大的结点,第二个错误结点是第二次降序时较小的点;
(2)如果中序遍历只有一次降序的话,那么第一个错误结点是此次降序较大的结点,第二个错误结点是此次降序较小的结点。
*/

func recoverTreeInOrder(root *TreeNode, firstNode, secondNode, preNode **TreeNode) {
	if root == nil {
		return
	}

	recoverTreeInOrder(root.Left, firstNode, secondNode, preNode)

	if (*firstNode) == nil && (*preNode).Val >= root.Val {
		*firstNode = *preNode
	}
	if (*firstNode) != nil && (*preNode).Val >= root.Val {
		*secondNode = root
	}
	*preNode = root

	recoverTreeInOrder(root.Right, firstNode, secondNode, preNode)
}

func recoverTree(root *TreeNode) {
	var firstNode *TreeNode
	var secondNode *TreeNode
	var preNode *TreeNode
	preNode = &TreeNode{math.MinInt64, nil, nil}
	recoverTreeInOrder(root, &firstNode, &secondNode, &preNode)
	firstNode.Val, secondNode.Val = secondNode.Val, firstNode.Val
}
