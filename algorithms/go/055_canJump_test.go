package algorithms

import "testing"

func TestCanJump(t *testing.T) {
	nums := []int{2, 3, 1, 1, 4}
	r := canJump(nums)
	if r != true {
		t.Error()
	}

	nums = []int{3, 2, 1, 0, 4}
	r = canJump(nums)
	if r != false {
		t.Error()
	}
}
