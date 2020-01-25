package algorithms

func subarraySumForce(nums []int, k int) int {
	count := 0
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j <= len(nums); j++ {
			t := sumArray(nums[i:j]...)
			if t == k {
				count++
			}
		}
	}
	return count
}

func subarraySum(nums []int, k int) int {
	count := 0
	dict := make(map[int]int)
	dict[0] = 1
	cur := 0
	for i := 0; i < len(nums); i++ {
		cur += nums[i]
		if _, ok := dict[cur-k]; ok {
			count += dict[cur-k]
		}
		dict[cur]++
	}
	return count
}
