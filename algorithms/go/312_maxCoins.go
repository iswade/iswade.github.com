package algorithms

func maxCoins(nums []int) int {
	var newNums []int
	newNums = append(newNums, 1)
	newNums = append(newNums, nums...)
	newNums = append(newNums, 1)
	nums = newNums

	dp := make([][]int, len(nums))
	for i := 0; i < len(dp); i++ {
		dp[i] = make([]int, len(nums))
	}

	for l := 2; l < len(nums); l++ {
		for i := 0; i < len(nums)-l; i++ {
			j := i + l
			for k := i + 1; k < j; k++ {
				dp[i][j] = maxAny(dp[i][j], nums[i]*nums[k]*nums[j]+dp[i][k]+dp[k][j])
			}
		}
	}

	return dp[0][len(nums)-1]
}
