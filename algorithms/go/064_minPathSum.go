package algorithms

func minPathSum(grid [][]int) int {
	m := len(grid)
	if m == 0 {
		return 0
	}

	n := len(grid[0])

	dp := make([][]int, m)
	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if i == 0 && j == 0 {
				dp[i][j] = grid[0][0]
			}
			if i == 0 && j > 0 {
				dp[i][j] = dp[i][j-1] + grid[i][j]
			}
			if i > 0 && j == 0 {
				dp[i][j] = dp[i-1][j] + grid[i][j]
			}
			if i > 0 && j > 0 {
				dp[i][j] = minAny(dp[i-1][j], dp[i][j-1]) + grid[i][j]
			}
		}
	}

	return dp[m-1][n-1]
}
