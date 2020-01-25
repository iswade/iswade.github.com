package algorithms

import "testing"

func TestMaxSumSubmatrix(t *testing.T) {
	matrix := [][]int{
		{1, 0, 1},
		{0, -2, 3},
	}

	r := maxSumSubmatrix(matrix, 2)
	if r != 2 {
		t.Error(r)
	}
}

func TestMaxSumSubmatrix02(t *testing.T) {
	matrix := [][]int{
		{2, 2, -1},
	}

	r := maxSumSubmatrix(matrix, 3)
	if r != 3 {
		t.Error(r)
	}
}
