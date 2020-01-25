package algorithms

import (
	"fmt"
	"testing"
)

func TestSolveNQueens(t *testing.T) {
	r := solveNQueens(4)
	for i := 0; i < len(r); i++ {
		for j := 0; j < len(r[i]); j++ {
			fmt.Println(r[i][j])
		}
		fmt.Println()
	}
}
