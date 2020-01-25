package algorithms

func isSubsequence1(s string, t string) bool {
	left := 0
	for idx, _ := range t {
		if left >= len(s) {
			break
		}

		if t[idx] == s[left] {
			left++
		}
	}

	if left == len(s) {
		return true
	}

	return false
}

/*
状态：dp[i][j]为s的从头开始到i的子字符串是否为t从头开始到j的子字符串的子序列

状态转移公式：

dp[i][j] = dp[i-1][j-1]  s[i]=t[j]
dp[i][j] = dp[i][j-1]    s[i]!=t[j]


结果：返回dp[sLen][tLen]
*/

func isSubsequence(s string, t string) bool {
	dp := make([][]bool, len(s)+1)
	for idx, _ := range dp {
		dp[idx] = make([]bool, len(t)+1)
	}

	for i := 0; i < len(s)+1; i++ {
		dp[i][0] = false
	}

	for j := 0; j < len(t)+1; j++ {
		dp[0][j] = true
	}

	for i := 1; i < len(s)+1; i++ {
		for j := 1; j < len(t)+1; j++ {
			if s[i-1] == t[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = dp[i][j-1]
			}
		}
	}

	return dp[len(s)][len(t)]
}
