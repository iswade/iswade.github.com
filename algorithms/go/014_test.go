package algorithms

import "testing"

func TestLongestCommonPrefix(t *testing.T) {
	ss := []string{"flower", "flow", "flight"}
	r := longestCommonPrefix(ss)
	if r != "fl" {
		t.Error(r)
	}

	ss = []string{}
	r = longestCommonPrefix(ss)
	if r != "" {
		t.Error(r)
	}

	ss = []string{"dog", "racecar", "car"}
	r = longestCommonPrefix(ss)
	if r != "" {
		t.Error(r)
	}
}
