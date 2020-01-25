package algorithms

func dailyTemperatures(T []int) []int {
	/*
	   	temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
	                     [1,  1,  4,  2,  1,  1,  0,  0]。
	*/
	res := make([]int, len(T))
	for i := len(T) - 2; i >= 0; i-- {
		for j := i + 1; j < len(T); j += res[j] {
			if T[j] > T[i] {
				res[i] = j - i
				break
			} else if res[j] == 0 {
				res[i] = 0
				break
			}
		}
	}
	return res
}
