package algorithms

import (
	"fmt"
	"testing"
)

func TestPrevPermOpt1(t *testing.T) {
	v := []int{1, 9, 4, 6, 7}
	r := prevPermOpt1(v)
	fmt.Println(r)
}
