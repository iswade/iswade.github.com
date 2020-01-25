package algorithms

import "testing"

func TestLargestRectangleArea(t *testing.T) {
	heights := []int{2, 1, 5, 6, 2, 3}
	max := largestRectangleArea(heights)
	if max != 10 {
		t.Error(max, "!=", 10)
	}
}

func TestLargestRectangleArea02(t *testing.T) {
	heights := []int{0, 9}
	max := largestRectangleArea(heights)
	if max != 9 {
		t.Error(max, "!=", 9)
	}
}
