package algorithms

func canJump(nums []int) bool {
	if len(nums) <= 1 {
		return true
	}

	can := make([]bool, len(nums)+1)
	can[0] = true

	for i := 0; i < len(nums); i++ {
		if can[i] == false {
			return false
		}
		for j := i + 1; j-i-1 < nums[i] && j < len(nums); j++ {
			can[j] = true
		}
		if can[len(nums)-1] == true {
			return true
		}
	}

	return can[len(nums)-1]
}
