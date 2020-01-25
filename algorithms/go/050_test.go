package algorithms

import (
	"fmt"
	"testing"
)

func TestMyPow(t *testing.T) {
	r := myPow(2.0000, 10)
	fmt.Println(r)

	r = myPow(2.10000, 3)
	fmt.Println(r)

	r = myPow(2.00000, -2)
	fmt.Println(r)

	r = myPow(2.00000, 0)
	fmt.Println(r)
}
