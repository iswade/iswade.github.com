package algorithms

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
	q := NewQueue()

	node := root
	var res [][]int

	if node != nil {
		q.Enqueue(node)
	}

	for q.IsEmpty() != true {
		var nodes []int
		var levelNodes []*TreeNode
		for q.IsEmpty() != true {
			inode, _ := q.Dequeue()

			node := inode.(*TreeNode)
			nodes = append(nodes, node.Val)
			if node.Left != nil {
				levelNodes = append(levelNodes, node.Left)
			}
			if node.Right != nil {
				levelNodes = append(levelNodes, node.Right)
			}
		}

		for i := range levelNodes {
			q.Enqueue(levelNodes[i])
		}

		res = append(res, nodes)
	}

	return res
}
