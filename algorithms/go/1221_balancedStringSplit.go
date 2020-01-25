package algorithms

func balancedStringSplit(s string) int {
	l := 0
	r := 0
	count := 0

	for i := range s {
		if s[i] == 'L' {
			l++
		}

		if s[i] == 'R' {
			r++
		}

		if l == r {
			count++
		}
	}

	return count
}
