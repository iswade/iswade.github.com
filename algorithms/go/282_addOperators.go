package algorithms

import "strconv"

func addOperatorsF(num string, target int, expr string, prev, ans int, res *[]string) {
	if len(num) == 0 && ans == target {
		*res = append(*res, expr)
	} else {
		for i := 1; i < len(num)+1; i++ {
			if i > 1 && num[0] == '0' {
				continue
			}
			a, _ := strconv.Atoi(num[0:i])
			if expr == "" {
				addOperatorsF(num[i:], target, num[0:i], a, a, res)
			} else {
				addOperatorsF(num[i:], target, expr+"+"+num[0:i], a, ans+a, res)
				addOperatorsF(num[i:], target, expr+"-"+num[0:i], -a, ans-a, res)
				addOperatorsF(num[i:], target, expr+"*"+num[0:i], a*prev, ans+prev*(a-1), res)
			}
		}
	}
}

func addOperators(num string, target int) []string {
	var res []string
	addOperatorsF(num, target, "", 0, 0, &res)
	return res
}
