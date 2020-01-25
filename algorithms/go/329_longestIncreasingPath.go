package algorithms

func longestIncreasingPathDfs(matrix [][]int, x, y int, cache [][]int) int {
	posx := []int{-1, 1, 0, 0}
	posy := []int{0, 0, -1, 1}

	if cache[x][y] > 0 {
		return cache[x][y]
	}

	visited := make([][]bool, len(matrix))
	for i := 0; i < len(visited); i++ {
		visited[i] = make([]bool, len(matrix[i]))
	}

	for i := 0; i < 4; i++ {
		newx := x + posx[i]
		newy := y + posy[i]
		if newx >= 0 && newx < len(matrix) &&
			newy >= 0 && newy < len(matrix[0]) &&
			matrix[newx][newy] > matrix[x][y] {
			cache[x][y] = maxAny(cache[x][y], longestIncreasingPathDfs(matrix, newx, newy, cache))
		}
	}

	cache[x][y]++
	return cache[x][y]
}

func longestIncreasingPath(matrix [][]int) int {
	max := 0
	if len(matrix) == 0 {
		return 0
	}
	cache := make([][]int, len(matrix))
	for i := 0; i < len(cache); i++ {
		cache[i] = make([]int, len(matrix[i]))
	}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			tmp := longestIncreasingPathDfs(matrix, i, j, cache)
			if tmp > max {
				max = tmp
			}
		}
	}
	return max
}
