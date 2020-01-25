package algorithms

func permuteHelper(nums []int, begin, size int, res *[][]int) {
	if begin == size {
		c := make([]int, len(nums))
		copy(c, nums)
		*res = append(*res, c)
	}

	for i := begin; i < size; i++ {
		nums[begin], nums[i] = nums[i], nums[begin]
		permuteHelper(nums, begin+1, size, res)
		nums[begin], nums[i] = nums[i], nums[begin]
	}
}

func permute(nums []int) [][]int {
	var res [][]int
	permuteHelper(nums, 0, len(nums), &res)
	return res
}
