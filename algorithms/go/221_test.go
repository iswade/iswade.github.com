package algorithms

import "testing"

func TestMaximalSquare(t *testing.T) {
	m := [][]byte{
		{'1', '0', '1', '0', '0'},
		{'1', '0', '1', '1', '1'},
		{'1', '1', '1', '1', '1'},
		{'1', '0', '0', '1', '0'}}
	r := maximalSquare(m)
	if r != 4 {
		t.Error(r)
	}
}
