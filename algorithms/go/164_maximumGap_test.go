package algorithms

import (
	"testing"
)

func TestMaximumGap(t *testing.T) {
	nums := []int{3, 2, 8}
	r := maximumGap(nums)
	if r != 5 {
		t.Error(r)
	}

	nums = []int{3, 6, 9, 1}
	r = maximumGap(nums)
	if r != 3 {
		t.Error(r)
	}
}
