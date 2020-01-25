package algorithms

func nextPermutationReverse(nums []int) {
	for i := 0; i < len(nums)/2; i++ {
		nums[i], nums[len(nums)-i-1] = nums[len(nums)-i-1], nums[i]
	}
}

func nextPermutation(nums []int) {
	var i, k int

	k = len(nums) - 1
	// 从后往前找到升序序列，k代表最后一个升序的点
	for k > 0 && nums[k-1] >= nums[k] {
		k--
	}

	// 全部降序（例如：321），则返回第一个
	if k == 0 {
		nextPermutationReverse(nums)
		return
	}

	// 从后往前找到第一个比 k-1 的元素大的元素
	i = len(nums) - 1
	for nums[i] <= nums[k-1] {
		i--
	}

	// 交换
	nums[k-1], nums[i] = nums[i], nums[k-1]
	nextPermutationReverse(nums[k:])
}
