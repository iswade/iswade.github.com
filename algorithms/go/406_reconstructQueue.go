package algorithms

import (
	"sort"
)

func arrayInsert(a [][]int, size int, i int, b []int) {
	for idx := size - 1; idx >= i; idx-- {
		a[idx+1] = a[idx]
	}
	a[i] = b
}

func reconstructQueue(people [][]int) [][]int {
	sort.SliceStable(people, func(i, j int) bool {
		if people[i][0] == people[j][0] {
			return people[i][1] < people[j][1]
		} else {
			return people[i][0] > people[j][0]
		}
	})

	ret := make([][]int, len(people))
	for i := 0; i < len(people); i++ {
		ret[i] = make([]int, 2)
	}

	size := 0
	for _, p := range people {
		arrayInsert(ret, size, p[1], p)
		size++
	}
	return ret
}
