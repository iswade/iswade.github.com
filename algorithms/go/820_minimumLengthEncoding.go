package algorithms

import (
	"sort"
	"strings"
)

func minimumLengthEncoding(words []string) int {
	s := ""

	sort.SliceStable(words, func(i, j int) bool {
		return len(words[i]) > len(words[j])
	})

	var subWords []string

	for _, word := range words {
		if s == "" {
			s += word
			s += "#"
			subWords = append(subWords, word)
		} else {
			idx := -1

			for _, subWord := range subWords {
				if strings.HasSuffix(subWord, word) {
					idx = 0
					break
				}
			}

			if idx == -1 {
				s += word
				s += "#"
			}
		}
	}
	return len(s)
}
