package algorithms

import "testing"

func TestMaxProfit1(t *testing.T) {
	prices := []int{3, 3, 5, 0, 0, 3, 1, 4}
	r := maxProfit(prices)
	if r != 6 {
		t.Error(r)
	}

	prices = []int{1, 2, 3, 4, 5}
	r = maxProfit(prices)
	if r != 4 {
		t.Error(r)
	}
}
