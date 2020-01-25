package algorithms

import "sort"

// with hash method
func longestConsecutive(nums []int) int {
	ht := make(map[int]bool)
	for i := range nums {
		ht[nums[i]] = true
	}

	longest := 0

	for i := range nums {
		if ht[nums[i]] == true {
			delete(ht, nums[i])

			currentLongest := 1
			current := nums[i]
			for ht[current-1] == true {
				delete(ht, current-1)
				current--
			}

			currentLongest += nums[i] - current

			current = nums[i]

			for ht[current+1] == true {
				delete(ht, current+1)
				current++
			}

			currentLongest += current - nums[i]
			longest = maxAny(longest, currentLongest)
		}
	}

	return longest
}

func longestConsecutive02(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	sort.Ints(nums)

	last := nums[0]
	start := 0
	max := 0
	for i := range nums {
		if i == 0 {
			start = 0
			last = 0
		} else {
			if nums[i]-nums[last] == 1 || nums[i]-nums[last] == 0 {
				if nums[i]-nums[last] == 0 {
					start++
				}
				last = i
			} else {
				if last-start > max {
					max = last - start
				}
				last = i
				start = i
			}
		}
	}
	if last-start > max {
		max = last - start
	}

	return max + 1
}
