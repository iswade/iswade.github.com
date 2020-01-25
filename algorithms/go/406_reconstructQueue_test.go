package algorithms

import (
	"fmt"
	"testing"
)

func TestReconstructQueue(t *testing.T) {
	people := [][]int{{7, 0}, {4, 4}, {7, 1}, {5, 0}, {6, 1}, {5, 2}}
	ret := reconstructQueue(people)
	fmt.Println(ret)
}

func TestReconstructQueue02(t *testing.T) {
	people := [][]int{{9, 0}, {7, 0}, {1, 9}, {3, 0}, {2, 7}, {5, 3}, {6, 0}, {3, 4}, {6, 2}, {5, 2}}
	ret := reconstructQueue(people)
	fmt.Println(ret)
}
