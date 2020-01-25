package algorithms

import (
	"fmt"
	"testing"
)

func TestPermuteUnique(t *testing.T) {
	nums := []int{1, 1, 2}
	r := permuteUnique(nums)
	fmt.Println(r)

	nums = []int{1, 2, 3}
	r = permuteUnique(nums)
	fmt.Println(r)
}
