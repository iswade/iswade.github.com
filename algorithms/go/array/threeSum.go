package array

import "sort"

/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

func threeSum(nums []int) [][]int {
	var result [][]int

	n := len(nums)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			for k := j + 1; k < n; k++ {
				three := make([]int, 3)
				three[0] = nums[i]
				three[1] = nums[j]
				three[2] = nums[k]
				if three[0]+three[1]+three[2] == 0 && !isExists(result, three) {
					result = append(result, three)
				}
			}
		}
	}

	return result
}

func isExists(a [][]int, b []int) bool {

	for i := 0; i < len(a); i++ {
		sort.Ints(a[i])
		sort.Ints(b)
		if a[i][0] == b[0] && a[i][1] == b[1] && a[i][2] == b[2] {
			return true
		}
	}

	return false
}

func threeSumWithSort(nums []int) [][]int {
	var result [][]int
	sort.Ints(nums)

	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			break
		}

		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		s := i + 1
		t := len(nums) - 1
		for s < t {
			three := make([]int, 3)
			three[0] = nums[i]
			three[1] = nums[s]
			three[2] = nums[t]
			sum := three[0] + three[1] + three[2]
			if sum == 0 {
				result = append(result, three)

				for s < t && nums[s] == nums[s+1] {
					s++
				}

				for s < t && nums[t] == nums[t-1] {
					t--
				}

				s++
				t--

			} else if sum < 0 {
				s++
			} else {
				t--
			}
		}
	}

	return result
}
