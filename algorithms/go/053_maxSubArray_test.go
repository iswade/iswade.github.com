package algorithms

import "testing"

func TestMaxSubArray(t *testing.T) {
	nums := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	r := maxSubArray(nums)
	if r != 6 {
		t.Error(nums, r, "!=", 6)
	}
}
