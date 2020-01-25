package algorithms

func maxSlice(nums []int) int {
	max := nums[0]
	for _, num := range nums {
		if num > max {
			max = num
		}
	}

	return max
}

func maxSlidingWindow1(nums []int, k int) []int {
	var res []int

	for i := 0; i < len(nums); i++ {
		if i < k-1 {
			continue
		}

		res = append(res, maxSlice(nums[i-k+1:i+1]))
	}

	return res
}

func maxSlidingWindow(nums []int, k int) []int {
	var res []int
	q := make([]int, 0, len(nums))
	for i, v := range nums {

		// i 超过 k 之后，每次删除一个开始的元素序号
		if len(q) > 0 && q[0] <= i-k {
			q = q[1:]
		}

		// 如果当前节点比队列尾部的元素大，则删除队列中的元素
		for len(q) > 0 && nums[q[len(q)-1]] < v {
			q = q[0 : len(q)-1]
		}

		// 把序号加入队列
		q = append(q, i)
		if i >= k-1 {
			res = append(res, nums[q[0]]) // 去开头的元素作为最大值
		}
	}
	return res
}
