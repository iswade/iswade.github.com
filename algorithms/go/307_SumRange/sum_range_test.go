package sum_range

import "testing"

func TestSumRange(t *testing.T) {
	nums := []int{1, 3, 5}
	na := Constructor(nums)
	r := na.SumRange(0, 2)
	if r != 9 {
		t.Error(r)
	}
	na.Update(1, 2)
	r = na.SumRange(0, 2)
	if r != 8 {
		t.Error(r)
	}
}
