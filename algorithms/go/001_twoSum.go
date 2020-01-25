package algorithms

func twoSum(nums []int, target int) []int {
	ht := make(map[int]int, len(nums))

	for i := 0; i < len(nums); i++ {
		if _, ok := ht[target-nums[i]]; !ok {
			ht[nums[i]] = i
		} else {
			return []int{ht[target-nums[i]], i}
		}
	}

	return nil
}
