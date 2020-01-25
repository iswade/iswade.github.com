package algorithms

import "testing"

func TestExist(t *testing.T) {
	board := [][]byte{
		{'A', 'B', 'C', 'E'},
		{'S', 'F', 'C', 'S'},
		{'A', 'D', 'E', 'E'}}
	r := exist(board, "ABCCED")
	if r != true {
		t.Error()
	}

	r = exist(board, "SEE")
	if r != true {
		t.Error()
	}

	r = exist(board, "ABCB")
	if r != false {
		t.Error()
	}
}

func TestExist01(t *testing.T) {
	board := [][]byte{
		{'a'},
	}

	r := exist(board, "a")
	if r != true {
		t.Error(r)
	}
}

func TestExist02(t *testing.T) {
	board := [][]byte{
		{'a', 'a'},
	}

	r := exist(board, "aa")
	if r != true {
		t.Error(r)
	}
}
