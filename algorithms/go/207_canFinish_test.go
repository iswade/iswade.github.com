package algorithms

import "testing"

func TestCanFinish(t *testing.T) {
	pre := [][]int{{1, 0}}
	r := canFinish(2, pre)
	if r != true {
		t.Error(r)
	}

	pre = [][]int{{1, 0}, {0, 1}}
	r = canFinish(2, pre)
	if r != false {
		t.Error(r)
	}

	pre = [][]int{{1, 0}, {2, 1}}
	r = canFinish(3, pre)
	if r != true {
		t.Error(r)
	}

	pre = [][]int{{1, 0}, {2, 0}, {0, 2}}
	r = canFinish(3, pre)
	if r != false {
		t.Error(r)
	}
}
