package algorithms

func subsets(nums []int) [][]int {
	var res [][]int
	res = append(res, []int{})

	for i := 0 ;i < len(nums); i++ {
		size := len(res)
		for j := 0; j < size; j++ {
			line := make([]int, len(res[j]))
			copy(line, res[j])
			line = append(line, nums[i])
			res = append(res, line)
		}
	}
	return res
}