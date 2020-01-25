package algorithms

import (
	"sort"
	"testing"
)

func TestSingleNumber(t *testing.T) {
	nums := []int{1,2,1,3,2,5}
	a := singleNumber(nums)
	if len(a) != 2 {
		t.Error("len is not 2: ", len(a))
	}

	sort.Ints(a)

	if a[0] != 3 {
		t.Error(a[0])
	}

	if a[1] != 5 {
		t.Error(a[1])
	}
}