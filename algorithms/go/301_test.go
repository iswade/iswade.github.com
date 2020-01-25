package algorithms

import (
	"fmt"
	"testing"
)

func TestRemoveInvalidParentheses(t *testing.T) {
	r := removeInvalidParentheses("()())()")
	fmt.Println(r)

	r = removeInvalidParentheses("(a)())()")
	fmt.Println(r)
}
