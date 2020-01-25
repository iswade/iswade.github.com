package algorithms

func dfs(x, y, m, n int, word string, visited [][]bool, board [][]byte) bool {
	if len(word) == 1 {
		if board[x][y] == word[0] {
			return true
		}
		return false
	}
	dx := [4]int{-1, 0, 1, 0}
	dy := [4]int{0, 1, 0, -1}
	if board[x][y] == word[0] {
		for k := 0; k < 4; k++ {
			new_x := x + dx[k]
			new_y := y + dy[k]
			if new_x >= 0 && new_x < m && new_y >= 0 && new_y < n && !visited[new_x][new_y] {
				visited[new_x][new_y] = true
				if dfs(new_x, new_y, m, n, word[1:], visited, board) {
					return true
				}
				visited[new_x][new_y] = false
			}
		}
	}
	return false
}

func exist(board [][]byte, word string) bool {

	var m, n int
	m = len(board)
	if m > 0 {
		n = len(board[0])
	}
	visited := make([][]bool, m)
	for i := 0; i < m; i++ {
		visited[i] = make([]bool, n)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			visited[i][j] = true
			if dfs(i, j, m, n, word, visited, board) {
				return true
			}
			visited[i][j] = false
		}
	}
	return false
}

