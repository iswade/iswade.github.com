package algorithms

func maxAny(a ...int) int {
	max := a[0]
	for i := range a {
		if max < a[i] {
			max = a[i]
		}
	}
	return max
}

func minAny(a ...int) int {
	min := a[0]
	for i := range a {
		if min > a[i] {
			min = a[i]
		}
	}
	return min
}

func sumArray(arr ...int) int {
	sum := 0
	for i := range arr {
		sum += arr[i]
	}
	return sum
}
