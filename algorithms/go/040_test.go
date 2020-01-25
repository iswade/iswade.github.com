package algorithms

import (
	"fmt"
	"testing"
)

func TestCombinationSum2(t *testing.T) {
	cans := []int{10, 1, 2, 7, 6, 1, 5}
	r := combinationSum2(cans, 8)
	fmt.Println(r)

	cans = []int{2, 5, 2, 1, 2}
	r = combinationSum2(cans, 5)
	fmt.Println(r)
}
