package algorithms

import "sort"

func findKthLargest(nums []int, k int) int {

	sort.Slice(nums, func(i, j int) bool {
		if nums[i] > nums[j] {
			return true
		} else {
			return false
		}
	})

	return nums[k-1]
}
