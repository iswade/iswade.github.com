package algorithms

import (
	"fmt"
	"testing"
)

func TestNumSmallerByFrequency(t *testing.T)  {
	queries := []string{"cbd"}
	words := []string{"zaaaz"}

	res := numSmallerByFrequency(queries, words)
	fmt.Println(res)
}

func TestNumSmallerByFrequency02(t *testing.T)  {
	queries := []string{"bbb","cc"}
	words := []string{"a","aa","aaa","aaaa"}

	res := numSmallerByFrequency(queries, words)
	fmt.Println(res)
}