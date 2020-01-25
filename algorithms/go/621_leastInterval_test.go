package algorithms

import "testing"

func TestLeastInterval(t *testing.T) {
	task := []byte{'A', 'A', 'A', 'B', 'B', 'B'}
	r := leastInterval(task, 2)
	if r != 8 {
		t.Error(r)
	}

	task = []byte{'A', 'A', 'A', 'B', 'B', 'C'}
	r = leastInterval(task, 2)
	if r != 7 {
		t.Error(r)
	}

	r = leastInterval(task, 3)
	if r != 9 {
		t.Error(r)
	}

	task = []byte{'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'}
	r = leastInterval(task, 2)
	if r != 16 {
		t.Error(r)
	}
}
