package algorithms

import "testing"

func TestMaxProfit(t *testing.T) {
	prices := []int{7, 1, 5, 3, 6, 4}
	r := maxProfit01(prices)
	if r != 5 {
		t.Error(r)
	}

	prices = []int{7, 6, 4, 3, 1}
	r = maxProfit01(prices)
	if r != 0 {
		t.Error(r)
	}
}
