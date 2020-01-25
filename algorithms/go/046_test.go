package algorithms

import (
	"fmt"
	"testing"
)

func TestPermute(t *testing.T) {
	nums := []int{1, 2, 3}
	r := permute(nums)
	fmt.Println(r)
}
