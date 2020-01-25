package algorithms

import (
	"math"
	"strconv"
)

func isPrime(n int) bool {
	if n < 2 {
		return false
	}

	R := (int)(math.Sqrt((float64)(n)))

	for d := 2; d <= R; d++ {
		if n%d == 0 {
			return false
		}
	}

	return true
}

func isPalindrome(n int) bool {
	s := strconv.Itoa(n)

	for i := 0; i < len(s)/2; i++ {
		if s[i] != s[len(s)-1-i] {
			return false
		}
	}

	return true
}

func primePalindrome(N int) int {
	for {

		if isPrime(N) && isPalindrome(N) {
			return N
		}

		N++

		if 10000000 < N && N < 100000000 {
			N = 100000000
		}
	}

	return 0
}
