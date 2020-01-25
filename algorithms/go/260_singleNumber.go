package algorithms

func singleNumber(nums []int) []int {
	ht := make(map[int]int)
	a := make([]int, 0)

	for _, i := range nums {
		ht[i]++
	}

	for k, v := range ht {
		if v == 1 {
			a = append(a, k)
		}
	}

	return a
}