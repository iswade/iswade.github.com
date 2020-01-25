package array

import (
	"testing"
)

func TestTwoSum(t *testing.T) {
	nums := []int{2, 7, 11, 15}

	ret := twoSum(nums, 9)
	if ret[0] != 0 && ret[1] != 1 {
		t.Error(9, 0, 1, ret)
	}

	ret = twoSum(nums, 22)
	if ret[0] != 1 && ret[1] != 3 {
		t.Error(22, 1, 3, ret)
	}

	nums = []int{3, 2, 4}
	ret = twoSum(nums, 7)
	if ret[0] != 0 && ret[1] != 2 {
		t.Error(7, 0, 2, ret)
	}
}
