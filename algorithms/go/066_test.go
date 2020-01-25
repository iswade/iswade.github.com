package algorithms

import (
	"fmt"
	"testing"
)

func TestPlusOne(t *testing.T) {
	nums := []int{1, 2, 3}
	r := plusOne(nums)
	fmt.Println(r)

	nums = []int{9, 9, 9}
	r = plusOne(nums)
	fmt.Println(r)
}
