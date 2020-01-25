package algorithms

import "strconv"

func isOp(token string) bool {
	if token == "+" || token == "-" || token == "*" || token == "/" {
		return true
	}
	return false
}

func eval2Number(m1, m2 int, op uint8) int {
	switch op {
	case '+':
		return m1 + m2
	case '-':
		return m1 - m2
	case '*':
		return m1 * m2
	case '/':
		return m1 / m2
	}
	return 0
}

func evalRPN(tokens []string) int {

	var stack []int

	for i := 0; i < len(tokens); i++ {
		if isOp(tokens[i]) == false {
			num, _ := strconv.Atoi(tokens[i])
			stack = append(stack, num)
		} else {
			n1 := stack[len(stack)-1]
			n2 := stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			stack = append(stack, eval2Number(n2, n1, tokens[i][0]))
		}
	}

	return stack[0]
}
