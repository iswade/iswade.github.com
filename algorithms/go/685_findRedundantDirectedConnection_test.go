package algorithms

import (
	"fmt"
	"testing"
)

func TestFindRedundantDirectedConnection(t *testing.T) {
	a := [][]int{{1, 2}, {1, 3}, {2, 3}}
	r := findRedundantDirectedConnection(a)
	fmt.Println(r)

	a = [][]int{{1, 2}, {2, 3}, {3, 4}, {4, 1}, {1, 5}}
	r = findRedundantDirectedConnection(a)
	fmt.Println(r)

	a = [][]int{{2, 1}, {3, 1}, {4, 2}, {1, 4}}
	r = findRedundantDirectedConnection(a)
	fmt.Println(r)

	a = [][]int{{4, 2}, {1, 5}, {5, 2}, {5, 3}, {2, 4}}
	r = findRedundantDirectedConnection(a)
	fmt.Println(r)
}
