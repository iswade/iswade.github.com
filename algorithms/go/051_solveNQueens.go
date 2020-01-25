package algorithms

import "strings"

func isValidRowCol(one []int, row, col int) bool {
	left := col
	right := col
	for i := row; i >= 0; i-- {
		if i != row {
			if one[i] == col {
				return false
			}

			if left >= 0 && one[i] == left {
				return false
			}

			if right < len(one) && one[i] == right {
				return false
			}
		}

		left--
		right++
	}

	return true
}

func recurNQueens(n, row int, one []int, res *[][]string) {
	if row == n {
		tmp := make([]string, n)
		for i := 0; i < n; i++ {
			tmp[i] = strings.Repeat(".", one[i]) + "Q" + strings.Repeat(".", n-one[i]-1)
		}

		*res = append(*res, tmp)
	}

	for col := 0; col < n; col++ {
		if isValidRowCol(one, row, col) {
			one[row] = col
			recurNQueens(n, row+1, one, res)
		}
	}
}

func solveNQueens(n int) [][]string {
	var res [][]string
	one := make([]int, n)
	recurNQueens(n, 0, one, &res)
	return res
}
