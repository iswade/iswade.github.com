package 真题

import "sort"

func getNextRooms(visited []bool, intervals [][]int, i int) {
	visited[i] = true

	left := intervals[i][0]
	right := intervals[i][1]
	for k := 0; k < len(intervals); k++ {
		if visited[k] == true {
			continue
		}
		if intervals[k][1] <= left || intervals[k][0] >= right {
			if intervals[k][1] <= left {
				left = intervals[k][0]
			} else {
				right = intervals[k][1]
			}
			visited[k] = true
		}
	}
}

// 排序区间后，然后每次获取所有不想交的区间（把不想交的区间安排到同一个会议室）
func minMeetingRooms(intervals [][]int) int {
	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][0] < intervals[j][0] {
			return true
		} else if intervals[i][0] == intervals[j][0] {
			if intervals[i][1] < intervals[j][1] {
				return true
			}
		}
		return false
	})
	visited := make([]bool, len(intervals))
	count := 0
	for i := 0; i < len(intervals); i++ {
		if visited[i] == true {
			continue
		}
		getNextRooms(visited, intervals, i)
		count++
	}

	return count
}

// 通过计数进行计算
func minMeetingRooms1(intervals [][]int) int {
	nums := make(map[int]int)
	largest := 0
	var lineNum []int
	for i := range intervals {
		start := intervals[i][0]
		end := intervals[i][1]
		if _, ok := nums[start]; !ok {
			lineNum = append(lineNum, start)
		}
		if _, ok := nums[end]; !ok {
			lineNum = append(lineNum, end)
		}
		nums[start]++
		nums[end]--

		if end > largest {
			largest = end
		}
	}

	max := 0
	sum := 0
	sort.Ints(lineNum)
	for j := 0; j < len(lineNum); j++ {
		i := lineNum[j]
		if _, ok := nums[i]; !ok {
			continue
		}
		sum += nums[i]
		if sum > max {
			max = sum
		}
	}
	return max
}
