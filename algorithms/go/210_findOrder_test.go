package algorithms

import (
	"fmt"
	"testing"
)

func TestAssignTaskOrder(t *testing.T) {
	tasks := [][]int{{1,0}, {2,0}, {3,1}, {3,2}}
	r := assignTaskOrder(4, tasks)
	fmt.Println(r)

	tasks = [][]int{{1,0},{0,2},{2,1}}
	r = assignTaskOrder(3, tasks)
	fmt.Println(r)
}
