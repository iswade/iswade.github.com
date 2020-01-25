package algorithms

import (
	"math"
	"sort"
)

func insertMerge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return nil
	}

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
func insert(intervals [][]int, newInterval []int) [][]int {
	var ans [][]int
	if len(intervals) == 0 {
		ans = append(ans, newInterval)
		return ans
	}

	flag := false
	for i := 0; i < len(intervals); i++ {
		if flag == false && intervals[i][0] > newInterval[0] {
			ans = append(ans, newInterval)
			flag = true
		}

		ans = append(ans, intervals[i])
	}

	if flag == false {
		ans = append(ans, newInterval)
	}

	return insertMerge(ans)
}

func insert1(intervals [][]int, newInterval []int) [][]int {
	ht := make(map[int]int)
	max := math.MinInt64
	for i := 0; i < len(intervals); i++ {
		ht[intervals[i][0]]++
		ht[intervals[i][1]]--
		if intervals[i][1] > max {
			max = intervals[i][1]
		}
	}
	ht[newInterval[0]]++
	ht[newInterval[1]]--
	if newInterval[1] > max {
		max = newInterval[1]
	}

	var tmpArr [][2]int
	for k, v := range ht {
		tmpArr = append(tmpArr, [2]int{k, v})
	}
	sort.Slice(tmpArr, func(i, j int) bool {
		if tmpArr[i][0] < tmpArr[j][0] {
			return true
		}
		if tmpArr[i][0] == tmpArr[j][0] {
			return tmpArr[i][1] < tmpArr[j][1]
		}
		return false
	})
	sum := 0
	prev := math.MinInt64
	var res [][]int
	for i := 0; i < len(tmpArr); i++ {
		key := tmpArr[i][0]
		value := tmpArr[i][1]
		if value == 0 {
			continue
		}
		sum += value
		if sum == 0 {
			res = append(res, []int{prev, key})
			prev = math.MinInt64
		} else {
			if prev == math.MinInt64 {
				prev = key
			}
		}
	}
	return res
}
