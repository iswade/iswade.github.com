package algorithms

import "testing"

func TestCal(t *testing.T) {
	r := calculate("1 + 1")
	if r != 2 {
		t.Error(r)
	}

	r = calculate(" 2-1 + 2 ")
	if r != 3 {
		t.Error(r)
	}

	r = calculate("(1+(4+5+2)-3)+(6+8)")
	if r != 23 {
		t.Error(r)
	}

	r = calculate("(7)-(0)+(4)")
	if r != 11 {
		t.Error(r)
	}

	r = calculate("2-(5-6)")
	if r != 3 {
		t.Error(r)
	}

	r = calculate("2-4-(8+2-6+(8+4-(1)+8-10))")
	if r != -15 {
		t.Error(r)
	}
}
