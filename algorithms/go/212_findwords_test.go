package algorithms

import (
	"sort"
	"testing"
)

func TestFindWords(t *testing.T) {
	words := []string{"oath", "pea", "eat", "rain"}
	board := [][]byte{
		{'o', 'a', 'a', 'n'},
		{'e', 't', 'a', 'e'},
		{'i', 'h', 'k', 'r'},
		{'i', 'f', 'l', 'v'},
	}

	r := findWords(board, words)
	sort.Strings(r)
	if r[0] != "eat" && r[1] != "oath" {
		t.Error(r)
	}
}
