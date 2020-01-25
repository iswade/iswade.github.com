package algorithms

func combinationSum(candidates []int, target int) [][]int {
	var res [][]int
	var re []int
	combinationSumHelper(candidates, target, &res, re, 0)
	return res
}

func combinationSumHelper(candidates []int, target int, res *[][]int, one []int, start int) {
	if target < 0 {
		return
	}

	if target == 0 {
		var temp []int
		temp = make([]int, len(one))
		copy(temp, one)
		*res = append(*res, temp)
	}

	for i := start; i < len(candidates); i++ {
		one = append(one, candidates[i])
		combinationSumHelper(candidates, target-candidates[i], res, one, i)
		one = one[:len(one)-1]
	}
}
