package algorithms

import "testing"

func TestScheduleCourse(t *testing.T) {
	c := [][]int{{100, 200}, {200, 1300}, {1000, 1250}, {2000, 3200}}
	r := scheduleCourse(c)
	if r != 3 {
		t.Error(r)
	}

	c = [][]int{{1, 2}, {2, 3}}
	r = scheduleCourse(c)
	if r != 2 {
		t.Error(r)
	}

	c = [][]int{{5, 5}, {4, 6}, {2, 6}}
	r = scheduleCourse(c)
	if r != 2 {
		t.Error(r)
	}
}
