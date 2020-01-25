package algorithms

func getPermutationNext(nums []byte) {
	var i, j, k int

	k = len(nums) - 1
	// 从后往前找到升序序列，k代表最后一个升序的点
	for k > 0 && nums[k-1] >= nums[k] {
		k--
	}

	// 全部降序（例如：321），则没有下一个序列
	if k == 0 {
		return
	}

	// 从后往前找到第一个比 k-1 的元素大的元素
	i = len(nums) - 1
	for nums[i] <= nums[k-1] {
		i--
	}

	// 交换
	nums[k-1], nums[i] = nums[i], nums[k-1]

	// 逆序
	i = k
	j = len(nums) - 1
	for i < j {
		nums[i], nums[j] = nums[j], nums[i]
		i++
		j--
	}
}

func getPermutation(n int, k int) string {
	nums := make([]byte, n)

	for i := 0; i < n; i++ {
		c := i + '1'
		nums[i] = byte(c)
	}

	for i := 0; i < k-1; i++ {
		getPermutationNext(nums)
	}

	return string(nums)
}
