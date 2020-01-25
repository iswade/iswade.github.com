package algorithms

import (
	"fmt"
	"testing"
)

func TestGetPermutation(t *testing.T) {
	r := getPermutation(3, 4)
	fmt.Println(r)
}

func TestGetPermutationNext(t *testing.T) {
	nums := []byte{'1', '3', '5', '4', '2'}
	getPermutationNext(nums)
	fmt.Println(string(nums))
}
