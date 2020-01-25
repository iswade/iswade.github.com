package algorithms

import "testing"

func TestIsValidP(t *testing.T) {
	r := isValidP("()")
	if r != true {
		t.Error()
	}

	r = isValidP("()[]{}")
	if r != true {
		t.Error()
	}

	r = isValidP("(]")
	if r != false {
		t.Error()
	}

	r = isValidP("([)]")
	if r != false {
		t.Error()
	}

	r = isValidP("{[]}")
	if r != true {
		t.Error()
	}

}
