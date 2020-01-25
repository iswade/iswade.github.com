package algorithms

func isValidP(s string) bool {
	var stack []int32

	if len(s) == 0 {
		return true
	}

	ht := make(map[int32]int32)
	ht['('] = ')'
	ht['{'] = '}'
	ht['['] = ']'

	for _, c := range s {
		switch c {
		case '(', '{', '[':
			stack = append(stack, c)
		case ')', '}', ']':
			if len(stack) == 0 {
				return false
			}
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			top = ht[top]
			if top != c {
				return false
			}

		default:
			return false
		}
	}

	if len(stack) == 0 {
		return true
	}

	return false
}
