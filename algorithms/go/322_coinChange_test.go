package algorithms

import "testing"

func TestCoinChange(t *testing.T) {
	a := []int{1, 2, 5}
	r := coinChange(a, 11)
	if r != 3 {
		t.Error(r, 3)
	}

	b := []int{2}
	r = coinChange(b, 3)
	if r != -1 {
		t.Error(r, -1)
	}

	c := []int{1}
	r = coinChange(c, 0)
	if r != 0 {
		t.Error(r, 0)
	}
}
