package algorithms

import "math"

func maxSumSubmatrix(matrix [][]int, k int) int {
	rows := len(matrix)
	if rows == 0 {
		return 0
	}

	cols := len(matrix[0])
	if cols == 0 {
		return 0
	}

	max := math.MinInt32

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			up := 0
			if i > 0 {
				up = matrix[i-1][j]
			}
			left := 0
			if j > 0 {
				left = matrix[i][j-1]
			}
			diag := 0
			if i > 0 && j > 0 {
				diag = matrix[i-1][j-1]
			}
			matrix[i][j] += up + left - diag
		}
	}

	for rowStart := -1; rowStart < rows; rowStart++ {
		for rowEnd := rowStart + 1; rowEnd < rows; rowEnd++ {
			for colStart := -1; colStart < cols; colStart++ {
				for colEnd := colStart + 1; colEnd < cols; colEnd++ {
					up := 0
					if rowStart >= 0 {
						up = matrix[rowStart][colEnd]
					}
					left := 0
					if colStart >= 0 {
						left = matrix[rowEnd][colStart]
					}
					diag := 0
					if rowStart >= 0 && colStart >= 0 {
						diag = matrix[rowStart][colStart]
					}
					tmp := matrix[rowEnd][colEnd] + diag - left - up
					if tmp <= k && k-tmp < k-max {
						max = tmp
					}
				}
			}
		}
	}

	if max == math.MinInt32 {
		return 0
	}
	return max
}
