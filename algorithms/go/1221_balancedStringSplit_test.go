package algorithms

import "testing"

func TestBalancedStringSplit(t *testing.T) {

	r := balancedStringSplit("RLRRLLRLRL")
	if r != 4 {
		t.Error(r)
	}

	r = balancedStringSplit("RLLLLRRRLR")
	if r != 3 {
		t.Error(r)
	}

	r = balancedStringSplit("LLLLRRRR")
	if r != 1 {
		t.Error(r)
	}

	r = balancedStringSplit("RLLRRRLLLR")
	if r != 4 {
		t.Error(r)
	}
}
