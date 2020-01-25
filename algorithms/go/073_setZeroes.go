package algorithms

import "math"

func setFlag(matrix [][]int, x, y, X, Y int, MAX int) {
	for i := 0; i < Y; i++ {
		if matrix[x][i] == 0 {
			continue
		} else {
			matrix[x][i] = MAX
		}
	}

	for i := 0; i < X; i++ {
		if matrix[i][y] == 0 {
			continue
		} else {
			matrix[i][y] = MAX
		}
	}
}

func setZeroes(matrix [][]int) {
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 0 {
				matrix[i][j] = math.MaxInt64
				setFlag(matrix, i, j, len(matrix), len(matrix[i]), math.MaxInt64)
			}
		}
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == math.MaxInt64 {
				matrix[i][j] = 0
			}
		}
	}
}
