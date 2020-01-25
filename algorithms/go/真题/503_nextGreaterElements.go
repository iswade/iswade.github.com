package 真题

func nextMax(nums []int, target int) (int, bool) {
	for i := 0; i < len(nums); i++ {
		if nums[i] > target {
			return nums[i], true
		}
	}

	return 0, false
}

func nextGreaterElementsStack(nums []int) []int {
	res := make([]int, len(nums))
	length := len(nums) * 2
	var stack []int
	index := 0

	for i := length - 1; i >= 0; i-- {
		if i < len(nums) {
			index = i
		} else {
			index = i - len(nums)
		}

		for len(stack) > 0 && stack[len(stack)-1] <= nums[index] {
			stack = stack[0 : len(stack)-1]
		}

		if len(stack) > 0 {
			res[index] = stack[len(stack)-1]
		} else {
			res[index] = -1
		}
		stack = append(stack, nums[index])
	}
	return res
}

func nextGreaterElements(nums []int) []int {
	return nextGreaterElementsStack(nums)
	var res []int
	if len(nums) == 0 {
		res = append(res, -1)
		return nil
	}

	for i := 0; i < len(nums); i++ {
		num, ok := nextMax(nums[i+1:len(nums)], nums[i])
		if ok {
			res = append(res, num)
			continue
		}
		num, ok = nextMax(nums[0:i], nums[i])
		if ok {
			res = append(res, num)
			continue
		}
		res = append(res, -1)
	}
	return res
}
