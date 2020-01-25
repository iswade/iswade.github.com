package algorithms

import (
	"fmt"
	"testing"
)

func TestCustomSortString(t *testing.T) {
	r := customSortString("cba", "abcd")
	fmt.Println(r)

	r = customSortString("abc", "abcabcaaaabbbd")
	fmt.Println(r)
}
