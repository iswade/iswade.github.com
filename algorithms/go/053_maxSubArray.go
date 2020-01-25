package algorithms

func maxSubArray1(nums []int) int {

	if len(nums) < 1 {
		return 0
	}

	// dp[n] 标识以第 n 个字母结束时的最大连续子序列和
	// dp[n] = maxAny(dp[n-1]+nums[n], nums[n])

	dp := make([]int, len(nums)+2)
	dp[0] = nums[0]

	res := dp[0]

	for i := 1; i < len(nums); i++ {
		dp[i] = maxAny(dp[i-1]+nums[i], nums[i])
		res = maxAny(res, dp[i])
	}

	return res
}

func maxSubArray(nums []int) int {

	if len(nums) < 1 {
		return 0
	}

	// dp[n] 标识以第 n 个字母结束时的最大连续子序列和
	dp := nums[0]

	res := dp

	for i := 1; i < len(nums); i++ {
		dp = maxAny(dp+nums[i], nums[i])
		res = maxAny(res, dp)
	}

	return res
}
