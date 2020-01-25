package algorithms

func largestRectangleArea1(heights []int) int {
	max := 0

	for i := 0; i < len(heights); i++ {
		min := heights[i]
		for j := i; j < len(heights); j++ {
			if heights[j] < min {
				min = heights[j]
			}

			if max < min*(j-i+1) {
				max = min * (j - i + 1)
			}
		}
	}

	return max
}

// 分治
func calculateArea(heights []int, left int, right int) int {
	if left > right {
		return 0
	}
	min := left
	for i := left; i <= right; i++ {
		if heights[i] < heights[min] {
			min = i
		}
	}
	leftMax := calculateArea(heights, left, min-1)
	midMax := heights[min] * (right - left + 1)
	rightMax := calculateArea(heights, min+1, right)
	return maxAny(leftMax, midMax, rightMax)
}

func largestRectangleArea(height []int) int {
	return calculateArea(height, 0, len(height)-1)
}
