package algorithms

import (
	"fmt"
	"testing"
)

func TestReverseString(t *testing.T) {
	a := []byte{1,2,3}
	reverseString(a)
	fmt.Println(a)
}