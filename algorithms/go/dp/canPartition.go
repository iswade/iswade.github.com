package dp

func cp(i int, cw int, nums []int, sum int) bool {
	if cw == sum-cw {
		return true
	}

	if i >= len(nums) {
		return false
	}

	if cp(i+1, cw+nums[i], nums, sum) == true {
		return true
	} else {
		return cp(i+1, cw, nums, sum)
	}
}

func sum(nums []int) int {
	var sum int
	for _, num := range nums {
		sum += num
	}

	return sum
}

func canPartition(nums []int) bool {
	return cp(0, 0, nums, sum(nums))
}

func canPartitionDP(nums []int) bool {
	s := sum(nums)
	if s%2 != 0 {
		return false
	}

	target := s / 2

	var dp [][]bool

	for j := 0; j < len(nums); j++ {
		var t []bool
		for i := 0; i <= target; i++ {
			t = append(t, false)
		}
		dp = append(dp, t)
	}

	for i := 0; i <= target; i++ {
		if nums[0] == i {
			dp[0][i] = true
		}
	}

	for i := 1; i < len(nums); i++ {
		for j := 0; j <= target; j++ {
			if j >= nums[i] {
				dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
			} else {
				dp[i][j] = dp[i-1][j]
			}

			if j == target {
				if dp[i][j] == true {
					return true
				}
			}
		}
	}

	return false
}
