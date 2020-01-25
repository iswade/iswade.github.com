package algorithms

import (
	"fmt"
	"testing"
)

func TestWordBreak(t *testing.T) {
	s := "catsanddog"
	dict := []string{"cat", "cats", "and", "sand", "dog"}
	r := wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	s = "pineapplepenapple"
	dict = []string{"apple", "pen", "applepen", "pine", "pineapple"}
	r = wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	s = "catsandog"
	dict = []string{"cats", "dog", "sand", "and", "cat"}
	r = wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	dict = []string{"a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"}
	r = wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}
}
