package algorithms

import "sort"

func largestDivisibleSubset(nums []int) []int {
	sort.Ints(nums)

	dp := make([]int, len(nums))
	last := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		dp[i] = 1
		last[i] = -1
	}

	max := 0
	end := -1

	for i := 0; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			if nums[i]%nums[j] == 0 && dp[i] <= dp[j] {
				dp[i] = dp[j] + 1
				last[i] = j
			}
		}

		if dp[i] > max {
			max = dp[i]
			end = i
		}
	}

	var res []int
	for i := end; i != -1; i = last[i] {
		res = append(res, nums[i])
	}
	sort.Ints(res)
	return res
}
