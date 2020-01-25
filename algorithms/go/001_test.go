package algorithms

import (
	"fmt"
	"testing"
)

func TestTwoSum(t *testing.T) {
	nums := []int{2, 7, 11, 15}
	r := twoSum(nums, 9)
	fmt.Println(r)

	nums = []int{1, 1, 2, 3, 5}
	r = twoSum(nums, 2)
	fmt.Println(r)

	r = twoSum(nums, 5)
	fmt.Println(r)
}
