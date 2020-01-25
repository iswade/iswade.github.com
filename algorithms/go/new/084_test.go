package new

import "testing"

func TestLargestRectangeArea(t *testing.T) {
	h := []int{2, 1, 5, 6, 2, 3}
	r := largestRectangleArea(h)
	if r != 10 {
		t.Error(r)
	}
}
