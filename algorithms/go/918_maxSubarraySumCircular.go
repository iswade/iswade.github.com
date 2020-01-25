package algorithms

import "math"

func maxSubarraySumCircular(A []int) int {
	max := math.MinInt32
	curMax := math.MinInt32
	min := math.MaxInt32
	curMin := math.MaxInt32
	maxVal := math.MinInt64
	total := 0
	for i := 0; i < len(A); i++ {
		total += A[i]
		maxVal = maxAny(maxVal, A[i])

		curMax = maxAny(A[i], curMax+A[i])
		max = maxAny(max, curMax)

		curMin = minAny(A[i], curMin+A[i])
		min = minAny(min, curMin)
	}
	if maxVal <= 0 {
		return maxVal
	}
	return maxAny(max, total-min)
}
