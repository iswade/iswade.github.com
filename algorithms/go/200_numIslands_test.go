package algorithms

import "testing"

func TestNumIslands(t *testing.T) {
	grid := [][]byte{{'1', '1', '1', '1', '0'},
		{'1', '1', '0', '1', '0'},
		{'1', '1', '0', '0', '0'},
		{'0', '0', '0', '0', '0'},
	}

	r := numIslands(grid)
	if r != 1 {
		t.Error(r)
	}
}
