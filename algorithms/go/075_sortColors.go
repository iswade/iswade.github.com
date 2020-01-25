package algorithms

func sortColors(nums []int) {
	var colors [3]int
	for _, num := range nums {
		colors[num]++
	}

	count := 0
	for i := 0; i < 3; i++ {
		for j := 0; j < colors[i]; j++ {
			nums[count] = i
			count++
		}
	}
}
