package main

import "fmt"

func isFactor(s string, f string) bool {
	p := f
	for {
		if len(p) > len(s) {
			break
		}

		if p == s {
			return true
		}

		p = p + f
	}

	return false
}

func main() {

	var s1 string
	var s2 string
	fmt.Scan(&s1)
	fmt.Scan(&s2)

	for i := 0; i < len(s1) && i < len(s2); i++ {
		if s1[i] != s2[i] {
			fmt.Println("No exist")
			return
		} else {
			if isFactor(s1, s1[:i+1]) && isFactor(s2, s2[:i+1]) {
				fmt.Println(s1[:i+1])
				return
			}
		}
	}

	fmt.Println("No exist")
}
