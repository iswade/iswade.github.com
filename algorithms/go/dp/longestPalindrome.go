package dp

func isPalincrome(s string) bool {
	for i := 0; i < len(s)/2; i++ {
		if s[i] != s[len(s)-1-i] {
			return false
		}
	}

	return true
}

func longestPalindrome(s string) string {

	var res string

	for i := 0; i < len(s); i++ {
		for j := i + 1; j <= len(s); j++ {
			if isPalincrome(s[i:j]) {
				if len(s[i:j]) > len(res) {
					res = s[i:j]
				}
			}
		}
	}

	return res
}
