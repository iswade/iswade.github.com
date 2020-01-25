package algorithms

func lengthOfLongestSubstring(s string) int {

	max := 0
	i := 0
	j := 0

	ht := make(map[byte]int)

	for i < len(s) && j < len(s) {
		if _, ok := ht[s[j]]; ok {
			delete(ht, s[i])
			i++
		} else {
			ht[s[j]]++
			j++
			if j-i > max {
				max = j - i
			}
		}
	}
	return max
}
