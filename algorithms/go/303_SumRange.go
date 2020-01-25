package algorithms

type NumArray struct {
	nums []int
}

func Constructor2(nums []int) NumArray {
	na := NumArray{}
	na.nums = append(na.nums, 0)
	na.nums = append(na.nums, nums...)
	na.nums = append(na.nums, 0)

	for i := 0; i < len(nums); i++ {
		na.nums[i+1] = na.nums[i] + nums[i]
	}

	return na
}

func (this *NumArray) SumRange(i int, j int) int {
	sum := this.nums[j+1] - this.nums[i]
	return sum
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(i,j);
 */
