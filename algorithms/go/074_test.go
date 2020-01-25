package algorithms

import "testing"

func TestSearchMatrix(t *testing.T) {
	matrix := [][]int{
		{1, 3, 5, 7},
		{10, 11, 16, 20},
		{23, 30, 34, 50},
	}

	r := searchMatrix(matrix, 3)
	if r != true {
		t.Error()
	}

	r = searchMatrix(matrix, 13)
	if r != false {
		t.Error()
	}

	r = searchMatrix(matrix, 1)
	if r != true {
		t.Error()
	}

	r = searchMatrix(matrix, 50)
	if r != true {
		t.Error()
	}

	r = searchMatrix(matrix, 51)
	if r != false {
		t.Error()
	}

	r = searchMatrix(matrix, -11)
	if r != false {
		t.Error()
	}

}
