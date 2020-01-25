package algorithms

import "math"

func coinChange(coins []int, amount int) int {
	minCoins := make([]int, amount+1)
	minCoins[0] = 0

	for i := 1; i <= amount; i++ {
		min := math.MaxInt32
		for _, coin := range coins {
			if i == coin {
				min = 1
				break
			}
			if i > coin && min > minCoins[i-coin] {
				min = minCoins[i-coin] + 1
			}
		}
		minCoins[i] = min
	}

	if minCoins[amount] == math.MaxInt32 {
		return -1
	}

	return minCoins[amount]
}
