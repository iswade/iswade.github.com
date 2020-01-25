package algorithms

import "sort"

func recurCombinationSum2(candidates []int, start, target int, one []int, res *[][]int) {
	if target < 0 {
		return
	}

	if target == 0 {
		tmp := make([]int, len(one))
		copy(tmp, one)
		*res = append(*res, tmp)
	}

	for i := start; i < len(candidates); i++ {
		if i > start && candidates[i] == candidates[i-1] {
			continue
		}
		one = append(one, candidates[i])
		recurCombinationSum2(candidates, i+1, target-candidates[i], one, res)
		one = one[:len(one)-1]
	}
}

func combinationSum2(candidates []int, target int) [][]int {
	var res [][]int
	var one []int
	sort.Ints(candidates)
	recurCombinationSum2(candidates, 0, target, one, &res)
	return res
}
