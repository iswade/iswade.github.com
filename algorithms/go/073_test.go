package algorithms

import (
	"fmt"
	"testing"
)

func TestSetZeroes(t *testing.T) {
	m := [][]int{
		{1, 1, 1},
		{1, 0, 1},
		{1, 1, 1},
	}

	setZeroes(m)

	for i := 0; i < len(m); i++ {
		fmt.Println(m[i])
	}

	m = [][]int{
		{0, 1, 2, 0},
		{3, 4, 5, 2},
		{1, 3, 1, 5},
	}

	setZeroes(m)

	for i := 0; i < len(m); i++ {
		fmt.Println(m[i])
	}
}
