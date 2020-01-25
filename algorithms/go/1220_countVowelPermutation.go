package algorithms

import (
	"math"
)

func countVowelPermutation(n int) int {
	var a, e, i, o, u uint64
	a = 1
	e = 1
	i = 1
	o = 1
	u = 1

	var a1, e1, i1, o1, u1 uint64

	var mod uint64
	mod = uint64(math.Pow10(9)) + 7
	for idx := 1; idx < n; idx++ {
		a1 = (e + i + u) % mod
		e1 = (a + i) % mod
		i1 = (e + o) % mod
		o1 = i
		u1 = (i + o) % mod

		a = a1
		e = e1
		i = i1
		o = o1
		u = u1
	}

	return int((a + e + i + o + u) % mod)
}
