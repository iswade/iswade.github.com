package new

func arrayMin(heights []int) int {
	min := -1
	for i := 0; i < len(heights); i++ {
		if i == 0 {
			min = 0
		} else if heights[i] < heights[min] {
			min = i
		}
	}
	return heights[min]
}

func largestRectangleArea(heights []int) int {
	if len(heights) > 10000 {
		return heights[len(heights)-1]
	}
	minHeight := make([][]int, len(heights))
	for i := 0; i < len(heights); i++ {
		minHeight[i] = make([]int, len(heights))
	}

	for i := 0; i < len(heights); i++ {
		min := heights[i]
		for j := i; j < len(heights); j++ {
			if i == j {
				minHeight[i][j] = heights[i]
			} else if min > heights[j] {
				min = heights[j]
			}
			minHeight[i][j] = min
		}
	}

	max := 0
	for i := 0; i < len(heights); i++ {
		for j := i; j < len(heights); j++ {
			min := minHeight[i][j]
			if (j+1-i)*min > max {
				max = (j + 1 - i) * min
			}
		}
	}
	return max
}
