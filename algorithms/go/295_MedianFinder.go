package algorithms

import "container/heap"

type MedianFinder struct {
	minHeap *IntHeap
	maxHeap *IntHeap
}

func Constructor03() MedianFinder {
	md := MedianFinder{
		minHeap: &IntHeap{nil, func(heap *IntHeap, i, j int) bool {
			return heap.values[i] < heap.values[j]
		}},
		maxHeap: &IntHeap{nil, func(heap *IntHeap, i, j int) bool {
			return heap.values[i] > heap.values[j]
		}},
	}

	return md
}

func (m *MedianFinder) AddNum(num int) {
	heap.Push(m.maxHeap, num)
	heap.Push(m.minHeap, heap.Pop(m.maxHeap))
	if m.maxHeap.Len() < m.minHeap.Len() {
		heap.Push(m.maxHeap, heap.Pop(m.minHeap))
	}
}

func (m *MedianFinder) FindMedian() float64 {
	if m.maxHeap.Len() == m.minHeap.Len() {
		return float64(m.maxHeap.Top()+m.minHeap.Top()) / 2.0
	}

	return float64(m.maxHeap.Top())
}
