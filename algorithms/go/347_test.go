package algorithms

import (
	"fmt"
	"testing"
)

func TestTopKFrequent1(t *testing.T) {
	nums := []int{1, 1, 1, 2, 2, 3}
	r := topKFrequent1(nums, 2)
	fmt.Println(r)

	nums = []int{5, 3, 1, 1, 1, 3, 73, 1}
	r = topKFrequent1(nums, 2)
	fmt.Println(r)
}
