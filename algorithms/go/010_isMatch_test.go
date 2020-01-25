package algorithms

import (
	"testing"
)

func TestIsMatchWildChar(t *testing.T) {
	s := "abc"
	p := "a*c"
	r := isMatch(s, p)
	if r != false {
		t.Error()
	}

	s = "aa"
	p = "a*"
	r = isMatch(s, p)
	if r != true {
		t.Error()
	}
}
