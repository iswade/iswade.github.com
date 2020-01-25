package algorithms

import (
	"fmt"
	"testing"
)

func TestMinCostClimbingStairs(t *testing.T) {
	var a int8
	a = 4
	fmt.Println(a + int8(124))

	cost := []int{10, 15, 20}
	r := minCostClimbingStairs(cost)
	if r != 15 {
		t.Error(r)
	}

	cost = []int{1, 100, 1, 1, 1, 100, 1, 1, 100, 1}
	r = minCostClimbingStairs(cost)
	if r != 6 {
		t.Error(r)
	}

	cost = []int{1, 0, 0, 1}
	r = minCostClimbingStairs(cost)
	if r != 0 {
		t.Error(r)
	}

	cost = []int{0, 0, 1, 1}
	r = minCostClimbingStairs(cost)
	if r != 1 {
		t.Error(r)
	}
}
