package algorithms

func findAllOps(n int) []string {
	if n == 0 {
		return nil
	}

	if n == 1 {
		return []string{"+", "-"}
	}

	var res []string

	other := findAllOps(n - 1)
	for i := range other {
		res = append(res, "+"+other[i])
		res = append(res, "-"+other[i])
	}
	return res
}

func findTargetAdd(a, b int, op byte) int {
	if op == '+' {
		return a + b
	}
	return a - b
}

func findTargetSumWaysBaoLi(nums []int, S int) int {
	n := len(nums)
	r := findAllOps(n)
	count := 0
	for i := 0; i < len(r); i++ {
		sum := 0
		for j := 0; j < len(nums); j++ {
			sum = findTargetAdd(sum, nums[j], r[i][j])
		}
		if sum == S {
			count++
		}
	}
	return count
}

func findTargetSumWays(nums []int, S int) int {
	sum := sumArray(nums...)
	if sum < S || (sum+S)%2 == 1 {
		return 0
	}
	P := (sum + S) / 2
	var dp []int
	dp = append(dp, 1)
	for i := 0; i < P; i++ {
		dp = append(dp, 0)
	}

	for i := range nums {
		num := nums[i]
		for j := P; j > num-1; j-- {
			dp[j] += dp[j-num]
		}
	}
	return dp[P]
}
