package algorithms

func uniquePathsIIIDfs(grid [][]int, x, y int, pathMaxLen int, visited [][]bool, pathLen int, all *int) {
	if x < 0 || x >= len(grid) || y < 0 || y >= len(grid[0]) {
		return
	}

	if grid[x][y] == -1 || visited[x][y] == true {
		return
	}

	if grid[x][y] == 2 {
		if pathLen == pathMaxLen {
			*all++
		}
		return
	}

	visited[x][y] = true
	posx := []int{-1, 1, 0, 0}
	posy := []int{0, 0, -1, 1}
	for i := 0; i < len(posx); i++ {
		newx := x + posx[i]
		newy := y + posy[i]
		uniquePathsIIIDfs(grid, newx, newy, pathMaxLen, visited, pathLen+1, all)
	}
	visited[x][y] = false
}

func uniquePathsIII(grid [][]int) int {
	if len(grid) == 0 || len(grid[0]) == 0 {
		return 0
	}

	x := 0
	y := 0
	pathLen := 2
	// 获取起始节点，路线长度（包括起始节点，终止节点，以及所有0的个数）
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 0 {
				pathLen++
			} else if grid[i][j] == 1 {
				x = i
				y = j
			}
		}
	}

	visited := make([][]bool, len(grid))
	for i := 0; i < len(visited); i++ {
		visited[i] = make([]bool, len(grid[0]))
	}

	var all int
	uniquePathsIIIDfs(grid, x, y, pathLen, visited, 1, &all)
	return all
}
