package algorithms

func findRDCDfs(adj [][]int, begin int, visited []bool, circle *[][2]int) bool {

	list := adj[begin]
	for i := 0; i < len(list); i++ {
		node := [2]int{begin, list[i]}
		*circle = append(*circle, node)
		if visited[list[i]] == true {
			return true
		}
		visited[list[i]] = true
		if findRDCDfs(adj, list[i], visited, circle) {
			return true
		}
	}
	return false
}

func findRedundantDirectedConnection(edges [][]int) []int {
	// 1. 存在环   2. 入度为2
	v := 0
	for i := 0; i < len(edges); i++ {
		for j := 0; j < len(edges[i]); j++ {
			if edges[i][j] > v {
				v = edges[i][j]
			}
			edges[i][j]--
		}
	}

	in := make([]int, v)
	adj := make([][]int, v)
	for i := 0; i < len(edges); i++ {
		adj[edges[i][0]] = append(adj[edges[i][0]], edges[i][1])
	}

	for i := 0; i < v; i++ {
		for j := 0; j < len(adj[i]); j++ {
			in[adj[i][j]]++
			if in[adj[i][j]] == 2 { // 找到入度为2的节点，这个节点肯定存在需要删除的边
				for k := len(edges) - 1; k >= 0; k-- {
					if edges[k][1] == adj[i][j] {
						edges[k][0]++
						edges[k][1]++
						return edges[k]
					}
				}
			}
		}
	}

	visited := make([]bool, v)

	last := 0
	for i := 0; i < v; i++ {
		visited[i] = true
		var circle [][2]int
		// 找到图中的环
		if findRDCDfs(adj, i, visited, &circle) == true {
			last = 0
			for j := 0; j < len(circle); j++ {
				for k := 0; k < len(edges); k++ {
					if edges[k][0] == circle[j][0] && edges[k][1] == circle[j][1] && k > last {
						last = k
					}
				}
			}
		}
	}
	edges[last][0]++
	edges[last][1]++
	return edges[last]
}
