package algorithms

import "testing"

func TestIsMatch(t *testing.T) {
	r := isMatchRe("aa", "*")
	if r != true {
		t.Error(r)
	}

	r = isMatchRe("aab", "c*a*b")
	if r != false {
		t.Error(r)
	}
}
