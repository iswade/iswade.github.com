package algorithms

import "testing"

func TestCountSubstrings(t *testing.T) {
	r := countSubstrings("abc")
	if r != 3 {
		t.Error(r)
	}

	r = countSubstrings("aaa")
	if r != 6 {
		t.Error(r)
	}
}
