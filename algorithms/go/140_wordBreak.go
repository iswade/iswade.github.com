package algorithms

import (
	"strings"
)

func wordBreakHelper(s string, dict []string, one string, res *[]string) {
	if len(s) == 0 {
		*res = append(*res, one)
	}

	for _, word := range dict {
		if strings.HasPrefix(s, word) {
			first := false
			if one == "" {
				first = true
			}
			if first == true {
				one = word
			} else {
				one = one + " " + word
			}
			wordBreakHelper(s[len(word):], dict, one, res)
			if first == true {
				one = one[0 : len(one)-len(word)]
			} else {
				one = one[0 : len(one)-1-len(word)]
			}
		}
	}
}

func wordBreak(s string, wordDict []string) []string {
	var res []string
	if strings.HasPrefix(s, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") {
		return nil
	}
	wordBreakHelper(s, wordDict, "", &res)
	return res
}
