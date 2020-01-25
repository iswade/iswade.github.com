package new

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
}

func TestWordBreak1(t *testing.T) {
	s := "pineapplepenapple"
	dict := []string{"apple", "pen", "applepen", "pine", "pineapple"}
	r := wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}
}

func TestWordBreak2(t *testing.T) {
	s := "catsandog"
	dict := []string{"cats", "dog", "sand", "and", "cat"}
	r := wordBreak(s, dict)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}
}
