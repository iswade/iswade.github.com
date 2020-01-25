package algorithms

func reversePairsTimeout(nums []int) int {
	sum := 0
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] > 2*nums[j] {
				sum++
			}
		}
	}

	return sum
}

func mergeArray(nums []int, start, mid, end int) int {
	n1 := 0
	n2 := 0
	a1 := make([]int, mid-start+1)
	a2 := make([]int, end-mid)
	copy(a1, nums[start:mid+1])
	copy(a2, nums[mid+1:end+1])
	count := start
	res := 0

	l := start
	r := mid + 1
	for l <= mid && r <= end {
		if nums[l] > 2*nums[r] {
			res += mid - l + 1
			r += 1
		} else {
			l += 1
		}
	}

	for n1 < mid-start+1 && n2 < end-mid {
		next := 0
		if a1[n1] < a2[n2] {
			next = a1[n1]
			n1++
		} else {
			next = a2[n2]
			n2++
		}
		nums[count] = next
		count++
	}

	for n1 < mid-start+1 {
		nums[count] = a1[n1]
		count++
		n1++
	}

	for n2 < end-mid {
		nums[count] = a2[n2]
		count++
		n2++
	}
	return res
}

func mergeSort(nums []int, start, end int) int {
	if start >= end {
		return 0
	}

	p1 := mergeSort(nums, start, (start+end)/2)
	p2 := mergeSort(nums, (start+end)/2+1, end)
	p3 := mergeArray(nums, start, (start+end)/2, end)
	return p1 + p2 + p3
}

func reversePairs(nums []int) int {
	return mergeSort(nums, 0, len(nums)-1)
}
