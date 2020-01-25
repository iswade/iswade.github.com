package algorithms

func lengthOfLIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	if len(nums) == 1 {
		return 1
	}

	dp := make([]int, len(nums))
	dp[0] = 1
	max := 1
	for i := 1; i < len(nums); i++ {
		tmp := 0
		for j := i - 1; j >= 0; j-- {
			if nums[j] < nums[i] && dp[j] > tmp {
				tmp = dp[j]
			}
		}
		dp[i] = tmp + 1
		if dp[i] > max {
			max = dp[i]
		}
	}

	return max
}
