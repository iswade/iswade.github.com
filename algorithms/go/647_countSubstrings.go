package algorithms

func isPa(s string) bool {
	left := 0
	right := len(s) - 1
	for left <= right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}
	return true
}

func countSubstrings1(s string) int {
	count := 0
	for i := 0; i < len(s); i++ {
		for j := i + 1; j <= len(s); j++ {
			if isPa(s[i:j]) == true {
				count++
			}
		}
	}
	return count
}

func countSubstrings(s string) int {
	result := 0
	for i := 0; i < len(s); i++ {
		result += helper(s, i, i)
		result += helper(s, i, i+1)
	}
	return result
}

func helper(s string, i, j int) int {
	cnt := 0
	for i >= 0 && j < len(s) && s[i] == s[j] {
		cnt++
		i--
		j++
	}
	return cnt
}
