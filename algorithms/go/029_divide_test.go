package algorithms

import (
	"fmt"
	"testing"
)

func TestDivide(t *testing.T) {
	r := divide(-2147483648, -1)
	fmt.Println(r)
}
