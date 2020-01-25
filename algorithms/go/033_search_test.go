package algorithms

import "testing"

func TestSearch(t *testing.T) {
	nums := []int{4, 5, 6, 7, 0, 1, 2}
	r := search(nums, 0)
	if r != 4 {
		t.Error(r, "!=", 4)
	}

	nums = []int{4, 5, 6, 7, 0, 1, 2}
	r = search(nums, 3)
	if r != -1 {
		t.Error(r, "!=", -1)
	}
}
