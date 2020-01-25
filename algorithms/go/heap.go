package algorithms

type IntHeap struct {
	values []int
	less   func(heap *IntHeap, i, j int) bool
}

func (h *IntHeap) Len() int           { return len(h.values) }
func (h *IntHeap) Less(i, j int) bool { return h.less(h, i, j) }
func (h *IntHeap) Swap(i, j int)      { h.values[i], h.values[j] = h.values[j], h.values[i] }

func (h *IntHeap) Push(x interface{}) {
	h.values = append(h.values, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := h.values
	n := len(old)
	x := old[n-1]
	h.values = old[0 : n-1]
	return x
}

func (h *IntHeap) Top() int {
	return h.values[0]
}
