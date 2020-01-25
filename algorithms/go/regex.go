package algorithms

func reMatch(text, pattern string) bool {
	return rReMatch(0, 0, text, pattern)
}

func rReMatch(ti, pi int, text, pattern string) bool {
	if pi == len(pattern) {
		if ti == len(text) {
			return true
		}
		return false
	}

	if pattern[pi] == '*' {
		for k := 0; k <= len(text)-ti; k++ {
			res := rReMatch(ti+k, pi+1, text, pattern)
			if res == true {
				return res
			}
		}
	} else if pattern[pi] == '?' {
		res := rReMatch(ti, pi+1, text, pattern)
		if res == true {
			return true
		}
		res = rReMatch(ti+1, pi+1, text, pattern)
		if res == true {
			return true
		}
	} else if ti < len(text) && pattern[pi] == text[ti] {
		res := rReMatch(ti+1, pi+1, text, pattern)
		if res == true {
			return res
		}
	}
	return false
}
