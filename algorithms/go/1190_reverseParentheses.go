package algorithms

func searchParent(s string) (l, r int) {
	left := -1
	right := -1
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			left = i
			right = i
		}

		if s[i] == ')' {
			right = i
			break
		}
	}
	return left, right
}

func reverseParentheses(s string) string {
	ans := s
	for {
		l, r := searchParent(ans)
		if l == -1 {
			return ans
		}

		sub := []byte(ans[l+1 : r])
		reverseString(sub)
		subS := string(sub)
		ans = ans[0:l] + subS + ans[r+1:]
	}

	return ans
}
