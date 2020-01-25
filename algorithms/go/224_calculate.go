package algorithms

import "strconv"

type calStack struct {
	data []interface{}
}

func (s *calStack) calStackPush(data interface{}) {
	s.data = append(s.data, data)
}

func (s *calStack) calStackPop() interface{} {
	if len(s.data) == 0 {
		return nil
	}

	data := s.data[len(s.data)-1]
	s.data = s.data[0 : len(s.data)-1]
	return data
}

func (s *calStack) calStackTop() interface{} {
	if len(s.data) == 0 {
		return nil
	}

	data := s.data[len(s.data)-1]
	return data
}

func (s *calStack) Size() int {
	return len(s.data)
}

func getNextToken(s string, i *int) interface{} {
	if *i >= len(s) {
		return nil
	}

	for {
		if *i == len(s) {
			return nil
		}
		if s[*i] == ' ' {
			*i++
		} else {
			break
		}
	}

	if s[*i] == '(' {
		*i++
		return "("
	} else if s[*i] == ')' {
		*i++
		return ")"
	} else if s[*i] == '+' {
		*i++
		return "+"
	} else if s[*i] == '-' {
		*i++
		return "-"
	} else if s[*i] >= '0' && s[*i] <= '9' {
		var tmp []byte
		for {
			if *i < len(s) && s[*i] >= '0' && s[*i] <= '9' {
				tmp = append(tmp, s[*i])
				*i++
			} else {
				break
			}
		}
		ret, err := strconv.Atoi(string(tmp))
		if err == nil {
			return ret
		}
	}
	return nil
}

func calculate(s string) int {
	numStack := &calStack{nil}
	opStack := &calStack{nil}

	var i int
	var token interface{}
	for {
		token = getNextToken(s, &i)
		if token == nil {
			break
		}
		switch token {
		case "(":
			opStack.calStackPush(token)
		case "+", "-", ")":
			for opStack.Size() > 0 && (opStack.calStackTop() == "+" || opStack.calStackTop() == "-") {
				b := numStack.calStackPop()
				a := numStack.calStackPop()
				op := opStack.calStackPop()
				if op == "+" {
					numStack.calStackPush(a.(int) + b.(int))
				} else if op == "-" {
					numStack.calStackPush(a.(int) - b.(int))
				}
			}
			if token == ")" {
				if opStack.Size() > 0 && opStack.calStackTop() == "(" {
					opStack.calStackPop()
				}
			} else {
				opStack.calStackPush(token)
			}
		default:
			numStack.calStackPush(token)
		}
	}

	for opStack.Size() > 0 {
		b := numStack.calStackPop()
		a := numStack.calStackPop()
		op := opStack.calStackPop()
		if op == "+" {
			numStack.calStackPush(a.(int) + b.(int))
		} else if op == "-" {
			numStack.calStackPush(a.(int) - b.(int))
		}
	}

	return numStack.calStackPop().(int)
}
