package algorithms

func checkValid(res []byte) bool {
	ht := make(map[byte]int)
	for i := 0; i < len(res); i++ {
		if res[i] == '.' {
			continue
		}
		if _, ok := ht[res[i]]; ok {
			return false
		}
		ht[res[i]]++
	}
	return true
}

func isValidSudoku(board [][]byte) bool {
	center := make([][]bool, 9)
	for i := 0; i < 9; i++ {
		center[i] = make([]bool, 9)
	}
	center[1][1] = true
	center[1][4] = true
	center[1][7] = true

	center[4][1] = true
	center[4][4] = true
	center[4][7] = true

	center[7][1] = true
	center[7][4] = true
	center[7][7] = true
	poxx := []int{-1, 0, 1, -1, 0, 1, -1, 0, 1}
	poxy := []int{-1, -1, -1, 0, 0, 0, 1, 1, 1}
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			var res []byte
			if center[i][j] == true {
				for p := 0; p < 9; p++ {
					res = append(res, board[i+poxx[p]][j+poxy[p]])
				}
				if checkValid(res) != true {
					return false
				}
			}

			res = res[0:0]
			for k := 0; k < 9; k++ {
				res = append(res, board[i][k])
			}
			if checkValid(res) != true {
				return false
			}
			res = res[0:0]
			for m := 0; m < 9; m++ {
				res = append(res, board[m][j])
			}
			if checkValid(res) != true {
				return false
			}
		}
	}
	return true
}
