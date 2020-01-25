package algorithms

import "testing"

func TestLastSubstring(t *testing.T) {
	r := lastSubstring("abab")
	if r != "bab" {
		t.Error(r)
	}

	r = lastSubstring("leetcode")
	if r != "tcode" {
		t.Error(r)
	}
}
