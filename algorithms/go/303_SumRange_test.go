package algorithms

import "testing"

func TestNumArray_SumRange(t *testing.T) {
	nums := []int{-2, 0, 3, -5, 2, -1}

	a := Constructor2(nums)

	r := a.SumRange(0, 2)
	if r != 1 {
		t.Error(r)
	}
	r = a.SumRange(2, 5)
	if r != -1 {
		t.Error(r)
	}
	r = a.SumRange(0, 5)
	if r != -3 {
		t.Error(r)
	}
}
