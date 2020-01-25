package algorithms

import "testing"

func TestCandy(t *testing.T) {
	ratings := []int{1, 0, 2}
	r := candy(ratings)
	if r != 5 {
		t.Error(r)
	}

	ratings = []int{1, 2, 2}
	r = candy(ratings)
	if r != 4 {
		t.Error(r)
	}

	ratings = []int{1, 0, 3, 2, 1, 0, 1}
	r = candy(ratings)
	if r != 15 {
		t.Error(r)
	}
}
