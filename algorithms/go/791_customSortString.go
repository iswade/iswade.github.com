package algorithms

import "strings"

func customSortString(S string, T string) string {
	ht := make(map[byte]int)
	for i := range S {
		ht[S[i]] = i
	}

	ht1 := make(map[byte]int)
	other := ""
	for i := range T {
		if _, ok := ht[T[i]]; ok {
			ht1[T[i]]++
			continue
		}
		other += string(T[i])
	}

	pre := ""
	for i := range S {
		pre += strings.Repeat(string(S[i]), ht1[S[i]])
	}

	return pre + other
}
