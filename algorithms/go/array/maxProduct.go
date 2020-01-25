package array

/*
给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组
*/

// TODO: 使用动态规划来解决

func maxProduct(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	max := nums[0]
	n := len(nums)

	for i := 0; i < n; i++ {
		tmp := nums[i]

		if tmp > max {
			max = tmp
		}

		if i != n-1 {
			for j := i + 1; j < n; j++ {
				tmp *= nums[j]
				if tmp > max {
					max = tmp
				}
			}
		}
	}

	return max
}
