package algorithms

import (
	"fmt"
	"testing"
)

func TestCombinationSum(t *testing.T) {
	candidates := []int{2, 3, 6, 7}
	target := 7
	r := combinationSum(candidates, target)
	fmt.Println(r)
}

func TestCombinationSum1(t *testing.T) {
	candidates := []int{2, 3, 5}
	target := 8
	r := combinationSum(candidates, target)
	fmt.Println(r)
}
