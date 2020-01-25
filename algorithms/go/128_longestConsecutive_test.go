package algorithms

import (
	"testing"
)

func TestLongestConsecutive(t *testing.T) {
	nums := []int{100, 4, 200, 1, 3, 2}
	max := longestConsecutive(nums)
	if max != 4 {
		t.Error(max)
	}

	nums = []int{1, 2, 0, 1}
	max = longestConsecutive(nums)
	if max != 3 {
		t.Error(max)
	}
}
