package algorithms

import (
	"fmt"
	"testing"
)

func TestAddOperators(t *testing.T) {
	r := addOperators("123", 6)
	fmt.Println(r)

	r = addOperators("105", 5)
	fmt.Println(r)
}
