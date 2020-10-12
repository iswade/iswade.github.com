package main

import (
	"fmt"
	"testing"
)

const max = 32 * 4096

func array() [max]int {
	var x [max]int
	for i := 0; i < len(x); i++ {
		x[i] = i
	}
	return x
}

func slice() []int {
	x := make([]int, max)
	for i := 0; i < len(x); i++ {
		x[i] = i
	}
	return x
}

func BenchmarkArray(b *testing.B) {
	for i := 0; i < b.N; i++ {
		array()
	}
}

func BenchmarkSlice(b *testing.B) {
	for i := 0; i < b.N; i++ {
		slice()
	}
}

func TestSlice(t *testing.T) {
	s := make([]int, 1024*8, 1024*8)
	fmt.Println(len(s), cap(s))
	s = append(s, 1)
}
