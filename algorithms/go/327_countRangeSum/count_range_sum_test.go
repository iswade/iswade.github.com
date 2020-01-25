package _27_countRangeSum

import "testing"

func TestCountRangeSum(t *testing.T) {
	nums := []int{-2, 5, 1}
	r := countRangeSum(nums, -2, 2)
	if r != 3 {
		t.Error(r)
	}
}
