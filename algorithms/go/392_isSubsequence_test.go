package algorithms

import "testing"

func TestIsSubsequence(test *testing.T) {
	s := "abc"
	t := "ahbgdc"

	r := isSubsequence(s, t)
	if r != true {
		test.Error(t)
	}

	r = isSubsequence("axc", "ahbgdc")
	if r != false {
		test.Error(r)
	}
}
