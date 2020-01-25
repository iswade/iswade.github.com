package algorithms

import (
	"container/heap"
)

func swimInWaterBfs(grid [][]int, x, y, maxX, maxY int, visited [][]bool, pq *PriorityQueue, max *int) {
	if x == maxX && y == maxY {
		return
	}

	posX := []int{-1, 0, 1, 0}
	posY := []int{0, -1, 0, 1}
	for i := 0; i < 4; i++ {
		newX := x + posX[i]
		newY := y + posY[i]
		if newX >= 0 && newX <= maxX &&
			newY >= 0 && newY <= maxY &&
			visited[newX][newY] == false {
			visited[newX][newY] = true
			heap.Push(pq, &Item{grid[newX][newY], newX, newY})
		}
	}

	next := heap.Pop(pq)
	if *max < next.(*Item).priority {
		*max = next.(*Item).priority
	}
	swimInWaterBfs(grid, next.(*Item).x, next.(*Item).y, maxX, maxY, visited, pq, max)
}

func swimInWater(grid [][]int) int {
	if len(grid) == 0 {
		return 0
	}
	max := 0
	pq := &PriorityQueue{}
	heap.Init(pq)
	visited := make([][]bool, len(grid))
	for i := 0; i < len(grid); i++ {
		visited[i] = make([]bool, len(grid[0]))
	}
	visited[0][0] = true
	max = grid[0][0]
	swimInWaterBfs(grid, 0, 0, len(grid)-1, len(grid[0])-1, visited, pq, &max)
	return max
}

type Item struct {
	priority int
	x        int
	y        int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
	item := x.(*Item)
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[0 : n-1]
	return item
}
