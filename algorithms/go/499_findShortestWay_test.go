package algorithms

import (
	"fmt"
	"testing"
)

func TestFindShortestWay(t *testing.T) {
	board := [][]int{{0, 0, 0, 0, 0},
		{1, 1, 0, 0, 1},
		{0, 0, 0, 0, 0},
		{0, 1, 0, 0, 1},
		{0, 1, 0, 0, 0}}

	r := findShortestWay(board, []int{4, 3}, []int{0, 1})
	fmt.Println(r)

	board = [][]int{{0, 0, 0, 0, 0},
		{1, 1, 0, 0, 1},
		{0, 0, 0, 0, 0},
		{0, 1, 0, 0, 1},
		{0, 1, 0, 0, 0}}

	r = findShortestWay(board, []int{4, 3}, []int{3, 0})
	fmt.Println(r)
}
