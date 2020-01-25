package array

func twoSum(nums []int, target int) []int {

	var ret []int
	h := make(map[int]int)

	for i, num := range nums {
		if _, ok := h[target-num]; !ok {
			h[num] = i
		} else {
			ret = append(ret, h[target-num])
			ret = append(ret, i)
			return ret
		}
	}
	return ret
}
