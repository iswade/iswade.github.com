package algorithms

// 1. 找到不合法的左括号和右括号的个数
// 2. 使用深度优先遍历不断删除左括号或者右括号，直到不合法个数为0
// 3. 检查删除后的括号是否合法
func removeInvalidParentheses(s string) []string {
	left := 0
	right := 0
	for _, i := range s {
		if i == '(' {
			left++
		}
		if i == ')' {
			if left > 0 {
				left--
			} else {
				right++
			}
		}
	}
	var res []string
	removeInvalidParenthesesDfs(s, 0, left, right, &res)
	return res
}

func removeInvalidParenthesesDfs(s string, start, l, r int, res *[]string) {
	if l == 0 && r == 0 {
		if removeInvalidParenthesesCheck(s) {
			*res = append(*res, s)
		}
		return
	}

	for i := start; i < len(s); i++ {
		if i-1 >= start && s[i] == s[i-1] {
			continue
		}
		if l > 0 && s[i] == '(' {
			removeInvalidParenthesesDfs(s[0:i]+s[i+1:], i, l-1, r, res)
		}
		if r > 0 && s[i] == ')' {
			removeInvalidParenthesesDfs(s[0:i]+s[i+1:], i, l, r-1, res)
		}
	}
}

func removeInvalidParenthesesCheck(s string) bool {
	count := 0
	for _, c := range s {
		if c == '(' {
			count++
		}
		if c == ')' {
			count--
			if count < 0 {
				return false
			}
		}
	}
	return count == 0
}
