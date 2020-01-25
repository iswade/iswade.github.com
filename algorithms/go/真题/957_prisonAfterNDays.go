package 真题

// 通过循环计算寻找规律，然后直接计算第n个
func prisonAfterNDays(nums []int, n int) []int {
	orig := make([]int, len(nums))
	copy(orig, nums)
	ORIG := make([]int, len(nums))
	copy(ORIG, nums)
	i := 0
	var big [][]int
	for i = 0; i < n; i++ {
		nums[0] = 0
		for j := 1; j < 7; j++ {
			if orig[j-1] == orig[j+1] {
				nums[j] = 1
			} else {
				nums[j] = 0
			}
		}
		nums[7] = 0

		orig = make([]int, len(nums))
		copy(orig, nums)

		big = append(big, orig)

		if i == 0 {
			continue
		}
		j := 0
		for j = 0; j < 8; j++ {
			if big[0][j] != nums[j] {
				break
			}
		}
		if j == 8 {
			break
		}
	}
	if i == n {
		return big[n-1]
	}

	return big[(n-1)%i]
}
