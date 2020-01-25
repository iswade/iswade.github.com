package gostudy

import "fmt"

func mapSuite() {
	m := make(map[int]bool)
	m[1] = true

	if m[1] {
		fmt.Println("exists 1")
	}
	m[1] = false
	if m[1] {
		fmt.Println("exists 1")
	}

	r := m[3]
	fmt.Println(r)
}
