package algorithms

import (
	"fmt"
	"testing"
)

func TestSortedSquares(t *testing.T) {
	a := []int{-4, -3, -2, 0, 1, 3, 8, 9}
	r := sortedSquares(a)
	fmt.Println(r)
}

func TestSortedSquares02(t *testing.T) {
	a := []int{1}
	r := sortedSquares(a)
	fmt.Println(r)
}