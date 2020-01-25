package algorithms

import "sort"

func recurPermuteUnique(nums []int, length int, one []int, res *[][]int, used []bool) {
	if length == len(nums) {
		tmp := make([]int, len(nums))
		copy(tmp, one)
		*res = append(*res, tmp)
		return
	}

	for i := 0; i < len(nums); i++ {
		if used[i] != true {
			if i > 0 && nums[i] == nums[i-1] && used[i-1] == false {
				continue
			}

			one = append(one, nums[i])
			used[i] = true
			recurPermuteUnique(nums, length+1, one, res, used)
			one = one[:len(one)-1]
			used[i] = false
		}
	}
}

func permuteUnique(nums []int) [][]int {
	sort.Ints(nums)
	var res [][]int
	var one []int
	used := make([]bool, len(nums))
	recurPermuteUnique(nums, 0, one, &res, used)
	return res
}
