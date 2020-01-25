package algorithms

import (
	"fmt"
	"testing"
)

func TestProductExceptSelf(t *testing.T) {
	nums := []int{2, 3}
	r := productExceptSelf(nums)
	fmt.Println(r)

	nums = []int{1, 2, 3, 4}
	r = productExceptSelf(nums)
	fmt.Println(r)

	nums = []int{1, 2, 0, 4}
	r = productExceptSelf(nums)
	fmt.Println(r)

	nums = []int{2}
	r = productExceptSelf(nums)
	fmt.Println(r)
}
