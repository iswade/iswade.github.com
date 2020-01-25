package algorithms

func minCostClimbingStairs(cost []int) int {
	if len(cost) <= 1 {
		return 0
	}

	dp := make([]int, len(cost))

	dp[0] = cost[0]
	dp[1] = cost[1]

	// dp[i] 表示必须爬第i个楼梯需要的最小代价

	for i := 2; i < len(cost); i++ {
		dp[i] = minAny(dp[i-2]+cost[i], dp[i-1]+cost[i])
	}

	return minAny(dp[len(dp)-1], dp[len(dp)-2])
}

/*
0  [10    15    20]  0
0   10    15    30   15

0  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]   0
0   1  100  2  3  3  103  4  5  105  6    6

0  [1, 0, 0, 1]   0
0   1  0, 0, 1    0

0  {0, 0, 1, 1}   0
0   0  0  1  1   1
*/
