package algorithms

import (
	"fmt"
	"testing"
)

func TestReverseParenteses(t *testing.T) {
	r := reverseParentheses("(ed(et(oc))el)")
	fmt.Println(r)
}
