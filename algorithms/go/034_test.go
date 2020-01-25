package algorithms

import (
	"fmt"
	"testing"
)

func TestSearchRange(t *testing.T) {
	nums := []int{5, 7, 7, 8, 8, 10}
	r := searchRange(nums, 8)
	fmt.Println(r)

	r = searchRange(nums, 6)
	fmt.Println(r)

	nums = []int{2, 2}
	r = searchRange(nums, 3)
	fmt.Println(r)
}
