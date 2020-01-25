package algorithms

import (
	"container/heap"
	"fmt"
	"testing"
)

// This example inserts several integers into an IntHeap, checks the minimum,
// and removes them in order of priority.
func TestHeap(t *testing.T) {
	h := &IntHeap{values: []int{2, 1, 5, -3}, less: func(heap *IntHeap, i, j int) bool {
		return heap.values[i] > heap.values[j]
	}}

	heap.Init(h)
	heap.Push(h, 3)

	fmt.Println("original: ", h.values)

	e := heap.Pop(h).(int)
	fmt.Println("pop: ", e)

	e = heap.Pop(h).(int)
	fmt.Println("pop: ", e)

	for h.Len() > 0 {
		var x int
		x = heap.Pop(h).(int)
		fmt.Println("pop: ", x)
	}
}
