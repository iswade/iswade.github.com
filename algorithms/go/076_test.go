package algorithms

import "testing"

func TestMinWindow(t *testing.T) {
	S := "ADOBECODEBANC"
	T := "ABC"
	r := minWindow(S, T)
	if r != "BANC" {
		t.Error(r)
	}

	r = minWindow("a", "a")
	if r != "a" {
		t.Error(r)
	}

	r = minWindow("a", "aa")
	if r != "" {
		t.Error(r)
	}

	r = minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd")
	if r != "abbbbbcdd" {
		t.Error(r)
	}
}
