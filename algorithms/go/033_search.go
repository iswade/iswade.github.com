package algorithms

func searchRotateIndex(nums []int) int {
	last := 0
	for idx, num := range nums {
		if idx == 0 {
			last = num
		} else {
			if last > num {
				return idx
			}
		}
	}

	return -1
}

func binarySearch(nums []int, left, right int, target int) int {
	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] == target {
			return mid
		}
		if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}

func search(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	rotateIdx := searchRotateIndex(nums)
	if rotateIdx != -1 {
		r := binarySearch(nums, left, rotateIdx-1, target)
		if r != -1 {
			return r
		}
		r = binarySearch(nums, rotateIdx, right, target)
		if r != -1 {
			return r
		}
	} else {
		return binarySearch(nums, left, right, target)
	}

	return -1
}
