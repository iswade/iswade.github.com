package algorithms

func combineHelper(nums []int, k int, index int, one []int, res *[][]int) {
	if len(one) == k {
		tmp := make([]int, k)
		copy(tmp, one)
		*res = append(*res, tmp)
		return
	}

	for i := index; i < len(nums); i++ {
		one = append(one, nums[i])
		combineHelper(nums, k, i+1, one, res)
		one = one[0 : len(one)-1]
	}
}

func combine(n int, k int) [][]int {
	var res [][]int
	var nums []int
	nums = make([]int, n)
	for i := 1; i <= n; i++ {
		nums[i-1] = i
	}

	var one []int
	combineHelper(nums, k, 0, one, &res)
	return res
}
