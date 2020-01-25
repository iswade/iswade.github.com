package algorithms

func islandsDfs(grid [][]byte, nr, nc, r, c int) {
	grid[r][c] = '0'
	if r-1 >= 0 && grid[r-1][c] == '1' {
		islandsDfs(grid, nr, nc, r-1, c)
	}
	if r+1 < nr && grid[r+1][c] == '1' {
		islandsDfs(grid, nr, nc, r+1, c)
	}
	if c-1 >= 0 && grid[r][c-1] == '1' {
		islandsDfs(grid, nr, nc, r, c-1)
	}
	if c+1 < nc && grid[r][c+1] == '1' {
		islandsDfs(grid, nr, nc, r, c+1)
	}
}

func numIslands(grid [][]byte) int {
	rows := len(grid)
	if rows == 0 {
		return 0
	}

	cols := len(grid[0])
	num := 0
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == '1' {
				num++
				islandsDfs(grid, rows, cols, i, j)
			}
		}
	}
	return num
}
