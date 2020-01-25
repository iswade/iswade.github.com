package algorithms

import "testing"

func TestMaxSubArraySum(t *testing.T) {
	nums := []int{1, -2, 3, -2}
	r := maxSubarraySumCircular(nums)
	if r != 3 {
		t.Error(r)
	}

	nums = []int{5, -3, 5}
	r = maxSubarraySumCircular(nums)
	if r != 10 {
		t.Error(r)
	}
}
