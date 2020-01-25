package algorithms

func plusOne(digits []int) []int {
	if len(digits) == 0 {
		return []int{1}
	}

	digits[len(digits)-1]++

	var res []int
	flag := 0
	for i := len(digits) - 1; i >= 0; i-- {
		if digits[i]+flag >= 10 {
			digits[i] = digits[i] + flag - 10
			flag = 1
		} else {
			digits[i] += flag
			flag = 0
		}
	}
	if flag == 1 {
		res = append(res, flag)
	}

	res = append(res, digits...)
	return res
}
