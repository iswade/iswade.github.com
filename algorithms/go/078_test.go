package algorithms

import (
	"fmt"
	"testing"
)

func TestSubsets(t *testing.T) {
	nums := []int{1,2,3}
	r := subsets(nums)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	nums = []int{9,0,3,5,7}
	r = subsets(nums)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}
}
