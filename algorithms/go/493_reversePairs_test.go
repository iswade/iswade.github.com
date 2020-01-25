package algorithms

import "testing"

func TestReversePairs(t *testing.T) {
	nums := []int{1, 3, 2, 3, 1}
	r := reversePairs(nums)
	if r != 2 {
		t.Error(r, 2)
	}
}

func TestReversePairs02(t *testing.T) {
	nums := []int{2, 4, 3, 5, 1}
	r := reversePairs(nums)
	if r != 3 {
		t.Error(r, 3)
	}
}
