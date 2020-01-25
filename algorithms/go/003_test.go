package algorithms

import "testing"

func TestLengthOfLongestSubstring(t *testing.T) {
	r := lengthOfLongestSubstring("abcabcbb")
	if r != 3 {
		t.Error(r)
	}

	r = lengthOfLongestSubstring("bbbbb")
	if r != 1 {
		t.Error(r)
	}

	r = lengthOfLongestSubstring("pwwkew")
	if r != 3 {
		t.Error(r)
	}

	r = lengthOfLongestSubstring("au")
	if r != 2 {
		t.Error(r)
	}
}
