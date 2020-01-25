package algorithms

import (
	"container/heap"
)

type intCount struct {
	val   int
	count int
}

type IntCountHeap struct {
	values []intCount
}

func (h IntCountHeap) Len() int { return len(h.values) }

// less < 小根堆
// less > 大根堆
func (h IntCountHeap) Less(i, j int) bool { return h.values[i].count > h.values[j].count }
func (h IntCountHeap) Swap(i, j int)      { h.values[i], h.values[j] = h.values[j], h.values[i] }

// Push，列表中追加元素
func (h *IntCountHeap) Push(x interface{}) {
	h.values = append(h.values, x.(intCount))
}

// 这里的pop，注意就是删除列表中的最后一个元素
func (h *IntCountHeap) Pop() interface{} {
	l := len(h.values)
	x := h.values[l-1]
	h.values = h.values[0 : l-1]
	return x
}

func topKFrequent1(nums []int, k int) []int {

	ht := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		ht[nums[i]]++
	}

	countHeap := &IntCountHeap{}
	heap.Init(countHeap)
	for num, count := range ht {
		heap.Push(countHeap, intCount{num, count})
	}

	var ans []int
	for i := 0; i < k; i++ {
		top := heap.Pop(countHeap)
		ans = append(ans, top.(intCount).val)
	}

	return ans
}
