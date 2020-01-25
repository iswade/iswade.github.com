package algorithms

func lastSubstring(s string) string {
	maxChar := 'a'

	for _, c := range s {
		if c >= maxChar {
			maxChar = c
		}
	}

	lastIndex := -1
	for i, c := range s {
		if c == maxChar {
			if lastIndex == -1 {
				lastIndex = i
			} else {
				if s[i:] > s[lastIndex:] {
					lastIndex = i
				}
			}
		}
	}

	return s[lastIndex:]
}
