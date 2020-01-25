package algorithms

import "math"

func minAreaRect(points [][]int) int {
	ht := make(map[[2]int]bool)
	for i := 0; i < len(points); i++ {
		ht[[2]int{points[i][0], points[i][1]}] = true
	}

	max := math.MaxInt32
	for i := 0; i < len(points); i++ {
		for j := i + 1; j < len(points); j++ {
			if points[i][0] == points[j][0] || points[i][1] == points[j][1] {
				continue
			}
			p1 := [2]int{points[i][0], points[j][1]}
			p2 := [2]int{points[j][0], points[i][1]}
			if ht[p1] && ht[p2] {
				x2 := maxAny(points[i][0], points[j][0])
				y2 := maxAny(points[i][1], points[j][1])
				x1 := minAny(points[i][0], points[j][0])
				y1 := minAny(points[i][1], points[j][1])
				area := (y2 - y1) * (x2 - x1)
				if area < max {
					max = area
				}
			}
		}
	}

	if max == math.MaxInt32 {
		return 0
	}
	return max
}
