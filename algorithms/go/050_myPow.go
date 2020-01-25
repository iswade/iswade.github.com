package algorithms

func myPow(x float64, n int) float64 {
	if n == 0 {
		return 1.0
	}

	flag := 1
	if n < 0 {
		flag = -1
		n = -n
	}
	count := 1
	orig := x
	for count < n {
		if 2*count <= n {
			x = x * x
			count *= 2
		} else {
			for count < n {
				x *= orig
				count++
			}
			break
		}
	}

	if flag == 1 {
		return x
	}
	return 1 / x
}
