package algorithms

import "testing"

func TestFindTargetSumWays(t *testing.T) {
	nums := []int{1, 1, 1, 1, 1}
	r := findTargetSumWays(nums, 3)
	if r != 5 {
		t.Error(r)
	}

}
