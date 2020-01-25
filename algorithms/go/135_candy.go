package algorithms

func candy(ratings []int) int {
	if len(ratings) == 0 {
		return 0
	}
	if len(ratings) == 1 {
		return 1
	}

	candies := make([]int, len(ratings))
	candies1 := make([]int, len(ratings))
	candies[0] = 1
	for i := 1; i < len(ratings); i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		} else if ratings[i] <= ratings[i-1] {
			candies[i] = 1
		}
	}

	candies1[len(ratings)-1] = 1
	for i := len(ratings) - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			candies1[i] = candies1[i+1] + 1
		} else if ratings[i] <= ratings[i+1] {
			candies1[i] = 1
		}
	}

	sum := 0
	for i := 0; i < len(ratings); i++ {
		sum += maxAny(candies[i], candies1[i])
	}
	return sum
}
