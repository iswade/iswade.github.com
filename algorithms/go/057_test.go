package algorithms

import (
	"fmt"
	"testing"
)

func TestInsert(t *testing.T) {
	intervals := [][]int{{1, 3}, {6, 9}}
	newIntervals := []int{2, 5}
	ans := insert(intervals, newIntervals)
	fmt.Println(ans)

	intervals = [][]int{{1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}}
	newIntervals = []int{4, 8}
	ans = insert(intervals, newIntervals)
	fmt.Println(ans)

	intervals = [][]int{{1, 5}}
	newIntervals = []int{1, 7}
	ans = insert(intervals, newIntervals)
	fmt.Println(ans)
}
