package algorithms

import (
	"math"
	"sort"
)

func maximumGap01(nums []int) int {
	if len(nums) < 2 {
		return 0
	}

	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	max := nums[1] - nums[0]

	for i := 2; i < len(nums); i++ {
		if nums[i]-nums[i-1] > max {
			max = nums[i] - nums[i-1]
		}
	}

	return max
}

// solve the problem with bucket sort
func maximumGap(nums []int) int {
	n := len(nums)

	if n < 2 {
		return 0
	}

	maxNum := maxAny(nums...)
	minNum := minAny(nums...)

	gap := int(math.Ceil(float64(maxNum-minNum) / (float64(n) - 1)))

	bucket := make([][2]int, n)
	for i := 0; i < n; i++ {
		bucket[i][0] = math.MaxInt32
		bucket[i][1] = -math.MaxInt32
	}

	for i := range nums {
		if nums[i] == maxNum || nums[i] == minNum {
			continue
		}

		loc := (nums[i] - minNum) / gap
		bucket[loc][0] = minAny(nums[i], bucket[loc][0])
		bucket[loc][1] = maxAny(nums[i], bucket[loc][1])
	}

	preMin := minNum
	res := -math.MaxInt32
	for i := range bucket {
		x, y := bucket[i][0], bucket[i][1]
		if x == math.MaxInt32 {
			continue
		}

		res = maxAny(res, x-preMin)
		preMin = y
	}

	res = maxAny(res, maxNum-preMin)
	return res
}
