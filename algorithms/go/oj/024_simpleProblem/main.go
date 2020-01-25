package main

import (
	"fmt"
)

func main() {
	a := 0
	k := 0
	n := 0
	_, _ = fmt.Scan(&a, &k, &n)

	fmt.Println(a * (n + 1) + (n+1) * n / 2 * k)
}
