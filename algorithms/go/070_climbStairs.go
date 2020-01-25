package algorithms

func climbStairs(n int) int {
	// f(n) = f(n-1) + f(n-2)
	// f(1) = 1
	// f(2) = 2

	dp := make([]int, n+2)
	dp[1] = 1
	dp[2] = 2

	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}

	return dp[n]
}
