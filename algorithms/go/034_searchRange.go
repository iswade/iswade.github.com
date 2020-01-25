package algorithms

func searchRange(nums []int, target int) []int {
	ti := binarySearch(nums, 0, len(nums)-1, target)
	if ti == -1 {
		return []int{-1, -1}
	}

	left := ti - 1
	for left >= 0 {
		if nums[left] == target {
			left--
		} else {
			break
		}
	}

	left++

	right := ti + 1
	for right < len(nums) {
		if nums[right] == target {
			right++
		} else {
			break
		}
	}

	right--

	return []int{left, right}
}
