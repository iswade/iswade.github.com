package algorithms

import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	n := len(nums1)
	m := len(nums2)
	if n > m {
		return findMedianSortedArrays(nums2, nums1)
	}

	lMax1 := 0
	lMax2 := 0
	rMin1 := 0
	rMin2 := 0
	c1 := 0
	c2 := 0
	lo := 0
	hi := 2 * n

	for lo <= hi {
		c1 = (lo + hi) / 2
		c2 = m + n - c1
		if c1 == 0 {
			lMax1 = math.MinInt64
		} else {
			lMax1 = nums1[(c1-1)/2]
		}

		if c1 == 2*n {
			rMin1 = math.MaxInt64
		} else {
			rMin1 = nums1[c1/2]
		}

		if c2 == 0 {
			lMax2 = math.MinInt64
		} else {
			lMax2 = nums2[(c2-1)/2]
		}

		if c2 == 2*m {
			rMin2 = math.MaxInt64
		} else {
			rMin2 = nums2[c2/2]
		}

		if lMax1 > rMin2 {
			hi = c1 - 1
		} else if lMax2 > rMin1 {
			lo = c1 + 1
		} else {
			break
		}
	}
	return float64(maxAny(lMax1, lMax2)+minAny(rMin1, rMin2)) / 2.0
}
