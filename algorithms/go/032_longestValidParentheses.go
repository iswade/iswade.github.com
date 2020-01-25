package algorithms

// 栈（记录下标） + 哨兵（记录无效括号开始的角标）
func longestValidParentheses(s string) int {
	max := 0
	var stack []int
	stack = append(stack, -1) // 哨兵
	for i, c := range s {
		switch c {
		case '(':
			stack = append(stack, i)
		case ')':
			stack = stack[:len(stack)-1]
			if len(stack) == 0 {
				stack = append(stack, i) // 哨兵
			} else {
				top := stack[len(stack)-1] // 求最大长度
				if i-top > max {
					max = i - top
				}
			}
		}
	}

	return max
}
