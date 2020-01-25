package 真题

import (
	"fmt"
	"testing"
)

func TestNextGreaterElements(t *testing.T) {
	nums := []int{1, 2, 1}
	r := nextGreaterElements(nums)
	fmt.Println(r)

	nums = []int{1, 2, 3, 1, 4, 3}
	r = nextGreaterElements(nums)
	fmt.Println(r)
}
