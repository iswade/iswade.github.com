package algorithms

import "fmt"

var result [8]int
var all int

func cal8queens(row int) {
	if row == 8 {
		all++
		fmt.Println("========================", all)
		printQueens(result)
	}

	for col := 0; col < 8; col++ {
		if isOk(row, col) {
			result[row] = col
			cal8queens(row + 1)
		}
	}
}

func isOk(row, col int) bool {
	leftUp := col - 1
	rightUp := col + 1

	for i := row - 1; i >= 0; i-- {
		if result[i] == col {
			return false
		}
		if leftUp >= 0 {
			if result[i] == leftUp {
				return false
			}
		}
		if rightUp < 8 {
			if result[i] == rightUp {
				return false
			}
		}
		leftUp--
		rightUp++
	}

	return true
}

func printQueens(result [8]int) {
	for row := 0; row < 8; row++ {
		for col := 0; col < 8; col++ {
			if result[row] == col {
				fmt.Printf("Q ")
			} else {
				fmt.Print("* ")
			}
		}
		fmt.Println()
	}
	fmt.Println()
}
