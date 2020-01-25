package algorithms

import "testing"

func TestSubArraySum(t *testing.T) {
	nums := []int{1, 1, 1}
	r := subarraySum(nums, 2)
	if r != 2 {
		t.Error(r)
	}
}
func TestSubArraySum1(t *testing.T) {
	nums := []int{-1, -1, 1}
	r := subarraySum(nums, 0)
	if r != 1 {
		t.Error(r)
	}
}

func TestSubArraySum2(t *testing.T) {
	nums := []int{1, 2, -3, 3}
	r := subarraySum(nums, 3)
	if r != 3 {
		t.Error(r)
	}
}
