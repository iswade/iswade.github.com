package algorithms

import (
	"fmt"
	"testing"
)

func TestGenerateParenthesis(t *testing.T) {
	r := generateParenthesis(3)
	fmt.Println(r)
}
