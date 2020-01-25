package algorithms

func maxProfit1(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	min := prices[0]
	max := 0
	for i := 1; i < len(prices); i++ {
		if prices[i]-min > max {
			max = prices[i] - min
		}

		if prices[i] < min {
			min = prices[i]
		}
	}

	return max
}

func maxProfit(prices []int) int {

	max := maxProfit1(prices)
	for i := 2; i < len(prices); i++ {
		tmp := maxProfit1(prices[0:i]) + maxProfit1(prices[i:])
		if tmp > max {
			max = tmp
		}
	}

	return max
}
