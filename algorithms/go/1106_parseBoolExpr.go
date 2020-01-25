package algorithms

func parseBoolExpr(expression string) bool {
	start := 2
	end := len(expression) - 1
	switch expression[0] {
	case '!':
		return NotExpr(expression[start:end])
	case '&':
		return AndOr(expression[start:end], true)
	case '|':
		return AndOr(expression[start:end], false)
	default:
		return expression == "t"
	}
}

func NotExpr(expr string) bool {
	if len(expr) == 1 {
		return !(expr == "t")
	}
	return !parseBoolExpr(expr)
}

// flag &: true |: false
func AndOr(expr string, flag bool) bool {
	pre, idx := 0, 0
	for i := 0; i < len(expr); i++ {
		if expr[i] == '(' {
			if pre == 0 {
				idx = i
			}
			pre++
		} else if expr[i] == ')' {
			pre--
			if pre == 0 {
				t := parseBoolExpr(expr[idx-1 : i+1])
				if !t && flag {
					return false
				}
				if t && !flag {
					return true
				}
			}
		} else {
			if pre <= 0 {
				if expr[i] == 'f' && flag {
					return false
				}
				if expr[i] == 't' && !flag {
					return true
				}
			}
		}
	}
	return flag
}
