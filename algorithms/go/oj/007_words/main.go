package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {

	var s string

	r := bufio.NewReader(os.Stdin)
	s, _ = r.ReadString('\n')

	s = strings.Replace(s, "\n", "", -1)

	sArray := strings.Split(s, " ")

	sum := 0
	for _, word := range sArray {
		sum += len(word)
	}

	fmt.Printf("%.2f\n", (float64)(sum * 1.0) / (float64)(len(sArray)))
}
