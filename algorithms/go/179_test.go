package algorithms

import "testing"

func TestLargestNumber(t *testing.T) {
	nums := []int{3, 30, 34, 5, 9}
	r := largestNumber(nums)
	if r != "9534330" {
		t.Error(r)
	}

	nums = []int{10, 2}
	r = largestNumber(nums)
	if r != "210" {
		t.Error(r)
	}

	nums = []int{10, 1}
	r = largestNumber(nums)
	if r != "110" {
		t.Error(r)
	}

	nums = []int{1, 10}
	r = largestNumber(nums)
	if r != "110" {
		t.Error(r)
	}

	nums = []int{10, 12}
	r = largestNumber(nums)
	if r != "1210" {
		t.Error(r)
	}

	nums = []int{20, 1}
	r = largestNumber(nums)
	if r != "201" {
		t.Error(r)
	}

	nums = []int{121, 12}
	r = largestNumber(nums)
	if r != "12121" {
		t.Error(r)
	}

	nums = []int{0, 0}
	r = largestNumber(nums)
	if r != "0" {
		t.Error(r)
	}
}
