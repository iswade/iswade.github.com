package algorithms

import "sort"

func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return nil
	}

	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][0] < intervals[j][0] {
			return true
		} else if intervals[i][0] == intervals[j][0] {
			return intervals[i][1] < intervals[j][1]
		}
		return false
	})

	var ans [][]int
	ans = append(ans, intervals[0])
	for i := 1; i < len(intervals); i++ {
		if intervals[i][0] <= ans[len(ans)-1][1] {
			ans[len(ans)-1][1] = maxAny(ans[len(ans)-1][1], intervals[i][1])
		} else {
			ans = append(ans, intervals[i])
		}
	}

	return ans
}
