package algorithms

import (
	"fmt"
	"io"
	"strconv"
)

func q(n, m int) int {
	if n < 1 || m < 1 {
		return 0
	}

	if n == 1 || m == 1 {
		return 1
	}
	if n < m {
		return q(n, n)
	}

	if n == m {
		return q(n, m-1) + 1
	}

	return q(n, m-1) + q(n-m, m)
}


func main() {

	var input string
	var a []int

	for {
		_, err := fmt.Scanln(&input)
		if err == io.EOF {
			break
		}
		n, _ := strconv.Atoi(input)
		a = append(a, n)
	}

	for _, n := range a {
		fmt.Println(q(n, n))
	}
	// please define the output here. For example: fmt.Println(input)
}
