package algorithms

import (
	"sort"
	"strconv"
)

func lexicalOrder(n int) []int {
	var s []string
	for i := 1; i <= n; i++ {
		s = append(s, strconv.Itoa(i))
	}
	sort.Strings(s)
	var res []int
	for i := 0; i < len(s); i++ {
		ans, _ := strconv.Atoi(s[i])
		res = append(res, ans)
	}
	return res
}