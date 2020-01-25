package algorithms

func productExceptSelf(nums []int) []int {
	if len(nums) == 1 {
		return []int{0}
	}
	all := 1
	res := make([]int, len(nums))
	res[0] = 1
	for i := 1; i < len(res); i++ {
		all *= nums[i-1]
		res[i] = all
	}

	all = 1
	for i := len(res) - 2; i >= 0; i-- {
		all *= nums[i+1]
		res[i] *= all
	}

	return res
}
