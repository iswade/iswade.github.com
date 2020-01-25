package algorithms

import "strings"

func decodeString(s string) string {
	res := ""
	num := 0
	var stack1 []string
	var stack2 []int
	for i := range s {
		if s[i] >= '0' && s[i] <= '9' {
			num = num*10 + int(s[i]-'0')
			continue
		}
		if s[i] == '[' {
			stack1 = append(stack1, res)
			stack2 = append(stack2, num)
			res = ""
			num = 0
			continue
		}
		if s[i] == ']' {
			curNum := stack2[len(stack2)-1]
			stack2 = stack2[0 : len(stack2)-1]
			lastRes := stack1[len(stack1)-1]
			stack1 = stack1[0 : len(stack1)-1]
			res = lastRes + strings.Repeat(res, curNum)
			continue
		}
		res += string(s[i])
	}
	return res
}
