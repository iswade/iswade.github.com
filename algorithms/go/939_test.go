package algorithms

import (
	"testing"
)

func TestMinAreaRect(t *testing.T) {
	matrix := [][]int{{1, 1}, {1, 3}, {3, 1}, {3, 3}, {2, 2}}
	r := minAreaRect(matrix)
	if r != 4 {
		t.Error(r)
	}

	matrix = [][]int{{1, 1}, {1, 3}, {3, 1}, {3, 3}, {4, 1}, {4, 3}}
	r = minAreaRect(matrix)
	if r != 2 {
		t.Error(r)
	}

	matrix = [][]int{{1, 1}, {1, 3}, {3, 1}, {3, 3}, {2, 2}}
	r = minAreaRect(matrix)
	if r != 4 {
		t.Error(r)
	}
}
