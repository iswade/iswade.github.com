package array

import (
	"testing"
)

func TestMaxProduct(t *testing.T) {
	nums := []int{2, 3, -2, 4}

	ret := maxProduct(nums)
	if ret != 6 {
		t.Errorf("%v: expected: %d, return: %d", nums, 6, ret)
	}

	nums = []int{-2, 0, -1}
	ret = maxProduct(nums)
	if ret != 0 {
		t.Errorf("%v: expected: %d, return: %d", nums, 0, ret)
	}

	nums = []int{-2}
	ret = maxProduct(nums)
	if ret != -2 {
		t.Errorf("%v: expected: %d, return: %d", nums, -2, ret)
	}

	nums = []int{-2, 3, -4}
	ret = maxProduct(nums)
	if ret != 24 {
		t.Errorf("%v: expected: %d, return: %d", nums, 24, ret)
	}
}
