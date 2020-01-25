package algorithms

import (
	"os"
)

var f *os.File

func init() {
	f, _ = os.Open("D:/tmp.log")
}

func bulbSwitch(n int) int {

	bulb := make([]bool, n+1)
	for i := 1; i <= n; i++ {
		for j := i; j <= n; j += i {
			bulb[j] = !bulb[j]
		}
	}

	sum := 0
	for i := 1; i <= n; i++ {
		if bulb[i] == true {
			sum++
		}
	}

	return sum
}
