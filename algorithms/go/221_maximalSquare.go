package algorithms

// dp[i][j] 代表最大边长
// dp[i][j] = minAny(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
func maximalSquare(matrix [][]byte) int {
	rows := len(matrix)
	if rows == 0 {
		return 0
	}
	cols := len(matrix[0])
	dp := make([][]int, rows)
	max := 0

	// 初始化 dp 数组的第一列
	for i := 0; i < rows; i++ {
		dp[i] = make([]int, cols)
		dp[i][0] = int(matrix[i][0] - '0')
		max = maxAny(int(matrix[i][0]-'0'), max)
	}

	// 初始化 dp 数组的第一行
	for j := 0; j < cols; j++ {
		dp[0][j] = int(matrix[0][j] - '0')
		max = maxAny(int(matrix[0][j]-'0'), max)
	}

	for i := 1; i < rows; i++ {
		for j := 1; j < cols; j++ {
			if matrix[i][j] == '0' {
				continue
			} else {
				dp[i][j] = minAny(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
				max = maxAny(max, dp[i][j])
			}
		}
	}
	return max * max // 最大边长的乘积代表正方形面积
}
