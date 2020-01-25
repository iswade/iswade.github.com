package algorithms

// 算法：
// 1. 计算每一行1的高度
// 2. 然后计算最大矩形面积
func maximalRectangle(matrix [][]byte) int {
	if len(matrix) == 0 {
		return 0
	}

	heights := make([]int, len(matrix[0]))
	maxArea := 0
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if matrix[i][j] == '1' {
				heights[j]++
			} else {
				heights[j] = 0
			}
		}
		maxArea = maxAny(maxArea, largestRectangleArea(heights))
	}
	return maxArea
}
