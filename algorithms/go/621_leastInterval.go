package algorithms

import "sort"

func leastInterval(tasks []byte, n int) int {
	ht := make([]int, 26)

	for i := range tasks {
		ht[tasks[i]-'A']++
	}

	sort.Slice(ht, func(i, j int) bool {
		if ht[i] > ht[j] {
			return true
		}
		return false
	})

	max := ht[0] - 1
	idle := max * n
	for i := 1; i < 26; i++ {
		if ht[i] == 0 {
			continue
		}
		idle -= minAny(ht[i], max)
	}

	if idle > 0 {
		return idle + len(tasks)
	}

	return len(tasks)
}
