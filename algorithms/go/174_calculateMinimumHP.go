package algorithms

func calculateMinimumHP(dungeon [][]int) int {
	dp := make([][]int, len(dungeon))

	for i := 0; i < len(dp); i++ {
		dp[i] = make([]int, len(dungeon[i]))
	}

	return 0
}
