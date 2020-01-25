package gostudy

import "math"

func maxAny(a ...int) int {
	if len(a) == 0 {
		return math.MaxInt64
	}

	max := a[0]
	for i := range a {
		if max < a[i] {
			max = a[i]
		}
	}
	return max
}

func minAny(a ...int) int {
	if len(a) == 0 {
		return math.MinInt64
	}

	min := a[0]
	for i := range a {
		if min > a[i] {
			min = a[i]
		}
	}
	return min
}
