package algorithms

func trap1(height []int) int {
	sum := 0

	for i := 1; i < len(height); i++ {
		maxLeft := 0
		for j := i - 1; j >= 0; j-- {
			if height[j] > maxLeft {
				maxLeft = height[j]
			}
		}

		maxRight := 0
		for j := i + 1; j < len(height); j++ {
			if height[j] > maxRight {
				maxRight = height[j]
			}
		}

		min := maxLeft
		if maxLeft > maxRight {
			min = maxRight
		}
		if min > height[i] {
			sum += min - height[i]
		}
	}

	return sum
}
