package algorithms

import (
	"fmt"
	"testing"
)

func TestFindOrder(t *testing.T) {
	pre := [][]int{{1, 0}}
	r := findOrder(2, pre)
	fmt.Println(r)

	pre = [][]int{{1, 0}, {2, 0}, {3, 1}, {3, 2}}
	r = findOrder(4, pre)
	fmt.Println(r)
}
