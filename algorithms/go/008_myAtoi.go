package algorithms

import "math"

func myAtoi(str string) int {
	if len(str) == 0 {
		return 0
	}

	i := 0
	for i = 0; i < len(str); i++ {
		if str[i] != ' ' {
			break
		}
	}

	str = str[i:]

	if len(str) == 0 {
		return 0
	}

	flag := str[0]
	if flag == '-' || flag == '+' {
		str = str[1:]
	}
	var bytes []byte
	for i := 0; i < len(str); i++ {
		if str[i] >= '0' && str[i] <= '9' {
			bytes = append(bytes, str[i])
		} else {
			break
		}
	}

	if len(bytes) == 0 {
		return 0
	}

	res := 0
	pow := 1

	i = 0
	for i = 0; i < len(bytes); i++ {
		if bytes[i] == '0' {
			continue
		} else {
			break
		}
	}

	bytes = bytes[i:]

	if len(bytes) > 11 {
		if flag == '-' {
			return math.MinInt32
		} else {
			return math.MaxInt32
		}
	}

	for i := len(bytes) - 1; i >= 0; i-- {
		res += pow * int(bytes[i]-'0')
		pow *= 10

		tmp := res
		if flag == '-' {
			tmp = -res
		}
		if tmp <= math.MinInt32 {
			return math.MinInt32
		}
		if tmp >= math.MaxInt32 {
			return math.MaxInt32
		}
	}

	if flag == '-' {
		res = -res
	}

	return res
}
