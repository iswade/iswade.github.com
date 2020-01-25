package algorithms

import (
	"fmt"
	"testing"
)

func TestNextPermutation(t *testing.T) {
	nums := []int{1, 2, 3}
	nextPermutation(nums)
	fmt.Println(nums)

	nums = []int{3, 2, 1}
	nextPermutation(nums)
	fmt.Println(nums)

	nums = []int{1, 1, 5}
	nextPermutation(nums)
	fmt.Println(nums)

	nums = []int{1, 3, 2}
	nextPermutation(nums)
	fmt.Println(nums)
}
