package algorithms

import (
	"regexp"
	"strings"
)

func isMatchRe(s string, p string) bool {
	p = strings.Replace(p, "?", ".", -1)
	p = strings.Replace(p, "*", ".*", -1)
	p = "^" + p + "$"
	r, _ := regexp.MatchString(p, s)
	return r
}
