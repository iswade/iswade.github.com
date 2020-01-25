package algorithms

func maxProfit01(prices []int) int {
	/*
		f(n) = maxAny(prices[n] - min_n, f(n-1))
		f(1) = 0
	*/

	if len(prices) < 1 {
		return 0
	}

	dp := make([]int, len(prices)+2)
	dp[1] = 0
	min := prices[0]

	for i := 1; i < len(prices); i++ {
		dp[i] = maxAny(prices[i]-min, dp[i-1])

		if prices[i] < min {
			min = prices[i]
		}
	}

	return dp[len(prices)-1]
}
