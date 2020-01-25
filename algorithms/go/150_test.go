package algorithms

import "testing"

func TestEvalRPN(t *testing.T) {
	r := evalRPN([]string{"2", "1", "+", "3", "*"})
	if r != 9 {
		t.Error(r)
	}

	r = evalRPN([]string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"})
	if r != 22 {
		t.Error(r)
	}
}
