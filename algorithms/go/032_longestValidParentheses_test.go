package algorithms

import "testing"

func TestLongestValidParentheses(t *testing.T) {
	r := longestValidParentheses("(()")
	if r != 2 {
		t.Error(r)
	}

	r = longestValidParentheses(")()())")
	if r != 4 {
		t.Error(r)
	}

	r = longestValidParentheses("(((())())")
	if r != 8 {
		t.Error(r)
	}

	r = longestValidParentheses("))()))()")
	if r != 2 {
		t.Error(r)
	}
}
