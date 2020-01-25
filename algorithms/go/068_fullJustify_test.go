package algorithms

import (
	"fmt"
	"testing"
)

func TestFullJustify(t *testing.T) {
	words := []string{"This", "is", "an", "example", "of", "text", "justification."}
	ans := fullJustify(words, 16)
	for _, line := range ans {
		fmt.Printf("'%s'\n", line)
	}

	words = []string{"What", "must", "be", "acknowledgment", "shall", "be"}
	ans = fullJustify(words, 16)
	for _, line := range ans {
		fmt.Printf("'%s'\n", line)
	}

	words = []string{"Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
		"to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"}
	ans = fullJustify(words, 20)
	for _, line := range ans {
		fmt.Printf("'%s'\n", line)
	}

	words = []string{"Listen", "to", "many,", "speak", "to", "a", "few."}
	ans = fullJustify(words, 6)
	for _, line := range ans {
		fmt.Printf("'%s'\n", line)
	}

	words = []string{"Science", "is", "what", "we", "understand", "well",
		"enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"}
	ans = fullJustify(words, 20)
	for _, line := range ans {
		fmt.Printf("'%s'\n", line)
	}
}
