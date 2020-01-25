package sum_range

type NumArray struct {
	tree []int
}

func Constructor(nums []int) NumArray {
	na := NumArray{}
	na.tree = make([]int, len(nums)*2)
	for i := len(nums); i < 2*len(nums); i++ {
		na.tree[i] = nums[i-len(nums)]
	}
	for i := len(nums) - 1; i >= 0; i-- {
		na.tree[i] = na.tree[i*2] + na.tree[i*2+1]
	}
	return na
}

func (na *NumArray) Update(i int, val int) {
	n := len(na.tree)/2 + i
	na.tree[n] = val
	for n > 0 {
		left := n
		right := n
		if n%2 == 0 {
			right = n + 1
		} else {
			left = n - 1
		}
		na.tree[n/2] = na.tree[left] + na.tree[right]
		n /= 2
	}
}

func (na *NumArray) SumRange(i int, j int) int {
	l := i + len(na.tree)/2
	r := j + len(na.tree)/2
	sum := 0
	for l <= r {
		if l%2 == 1 {
			sum += na.tree[l]
			l++
		}
		if r%2 == 0 {
			sum += na.tree[r]
			r--
		}
		l /= 2
		r /= 2
	}
	return sum
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * obj.Update(i,val);
 * param_2 := obj.SumRange(i,j);
 */
