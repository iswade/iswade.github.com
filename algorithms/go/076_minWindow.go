package algorithms

import "math"

func minWindowIsValidIsValid(s string, left, right int, ht map[int32]int) bool {
	hs := make(map[int32]int)
	for i := left; i <= right; i++ {
		hs[int32(s[i])]++
	}

	for k, v := range ht {
		if hs[k] < v {
			return false
		}
	}

	return true
}

func minWindow1(s string, t string) string {

	min := math.MaxInt32
	minLeft := 0
	minRight := 0
	ht := make(map[int32]int)
	for _, c := range t {
		ht[c]++
	}

	for left := 0; left < len(s); left++ {
		for right := left; right < len(s); right++ {
			if minWindowIsValidIsValid(s, left, right, ht) == true {
				if right-left+1 < min {
					min = right - left + 1
					minLeft = left
					minRight = right
				}
			}
		}
	}

	if min == math.MaxInt32 {
		return ""
	}

	return s[minLeft : minRight+1]
}

func minWindow(s string, t string) string {
	start := 0
	minLen := math.MaxInt32
	left := 0
	right := 0
	window := make(map[byte]int)
	needs := make(map[byte]int)
	match := 0

	for i := range t {
		needs[t[i]]++
	}

	for right < len(s) {
		c1 := s[right]
		if needs[c1] > 0 {
			window[c1]++
			if window[c1] == needs[c1] {
				match++
			}
		}
		right++
		for match == len(needs) {
			if right-left < minLen {
				start = left
				minLen = right - left
			}
			c2 := s[left]
			if needs[c2] > 0 {
				window[c2]--
				if window[c2] < needs[c2] {
					match--
				}
			}
			left++
		}
	}
	if minLen == math.MaxInt32 {
		return ""
	}
	return s[start : start+minLen]
}
