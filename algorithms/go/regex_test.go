package algorithms

import "testing"

func TestReMatch(t *testing.T) {
	r := reMatch("abc", "a*")
	if r != true {
		t.Error(r)
	}

	r = reMatch("abcccccccc", "a*c")
	if r != true {
		t.Error(r)
	}
}
