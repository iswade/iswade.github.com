package algorithms

func isMatchDp(s string, p string) bool {
	sLen := len(s)
	pLen := len(p)
	dp := make([][]bool, sLen+1)
	for i := range dp {
		dp[i] = make([]bool, pLen+1)
	}

	dp[0][0] = true
	for i := 0; i <= sLen; i++ {
		for j := 1; j <= pLen; j++ {
			if p[j-1] == '*' {
				dp[i][j] = dp[i][j-2] || (i > 0 && (s[i-1] == p[j-2] || p[j-2] == '.') && dp[i-1][j])
			} else {
				dp[i][j] = i > 0 && (s[i-1] == p[j-1] || p[j-1] == '.') && dp[i-1][j-1]
			}
		}
	}

	return dp[sLen][pLen]
}

func isMatch(s string, p string) bool {
	if len(p) == 0 {
		if len(s) == 0 {
			return true
		} else {
			return false
		}
	}

	first := len(s) > 0 && (p[0] == s[0] || p[0] == '.')
	if len(p) >= 2 && p[1] == '*' {
		return isMatch(s, p[2:]) || (first && isMatch(s[1:], p))
	} else {
		return first && isMatch(s[1:], p[1:])
	}
}
