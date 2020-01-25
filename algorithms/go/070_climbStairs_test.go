package algorithms

import "testing"

func TestClimbStairs(t *testing.T) {
	r := climbStairs(3)
	if r != 3 {
		t.Error("failed")
	}
}
