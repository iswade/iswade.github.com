package algorithms
func maxIslandHelper(grid [][]int, x, y int, X, Y int) int {
	if x < 0 || x > X || y < 0 || y > Y {
		return 0
	}

	if grid[x][y] == 0 { // 已经遍历不能再遍历
		return 0
	}

	posx := []int{-1, 0, 1, 0}
	posy := []int{0, -1, 0, 1}

	count := 1
	grid[x][y] = 0 // 设置状态
	for i := 0; i < 4; i++ {
		newx := posx[i] + x
		newy := posy[i] + y
		count += maxIslandHelper(grid, newx, newy, X, Y)
	}

	return count
}

func maxAreaOfIsland(grid [][]int) int {
	max := 0
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			tmpMax := maxIslandHelper(grid, i, j, len(grid)-1, len(grid[i])-1)
			if tmpMax > max {
				max = tmpMax
			}
		}
	}
	return max
}
