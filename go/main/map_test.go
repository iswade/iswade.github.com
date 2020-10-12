package main

import (
	"fmt"
	"testing"
)

func TestMap(t *testing.T) {
	m := make(map[int]int)
	for i := 0; i < 10; i++ {
		m[i] = i + 10
	}

	for k := range m {
		if k == 5 {
			m[100] = 1000
		}
		delete(m, k)
		fmt.Println(k, m)
	}
}
