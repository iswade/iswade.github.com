package algorithms

import "testing"

func TestLengthOfLIS(t *testing.T) {
	nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	r := lengthOfLIS(nums)
	if r != 4 {
		t.Error(r)
	}

	nums = []int{}
	r = lengthOfLIS(nums)
	if r != 0 {
		t.Error(r)
	}

	nums = []int{1}
	r = lengthOfLIS(nums)
	if r != 1 {
		t.Error(r)
	}

	nums = []int{2, 2}
	r = lengthOfLIS(nums)
	if r != 1 {
		t.Error(r)
	}
}
