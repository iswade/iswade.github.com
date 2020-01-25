package algorithms

import (
	"sort"
	"strconv"
	"strings"
)

func largestNumber(nums []int) string {
	var res []string
	for _, num := range nums {
		res = append(res, strconv.Itoa(num))
	}

	sort.Slice(res, func(i, j int) bool {
		s1 := res[i] + res[j]
		s2 := res[j] + res[i]
		return s1 > s2
	})
	out := strings.Join(res, "")
	for len(out) > 1 && out[0] == '0' {
		out = out[1:]
	}
	return out
}
