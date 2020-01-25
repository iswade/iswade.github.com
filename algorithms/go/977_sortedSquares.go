package algorithms

func sortedSquares(A []int) []int {
	var res []int
	mid := 0

	for i := 0; i < len(A) ; i++ {
		if A[i] >= 0 {
			mid = i
			break
		}
	}

	left := mid - 1
	right := mid

	for left >=0 && right < len(A) {
		if A[left] * A[left] < A[right] * A[right] {
			res = append(res, A[left] * A[left])
			left--
		} else {
			res = append(res, A[right] * A[right])
			right++
		}
	}

	for left >= 0 {
		res = append(res, A[left] * A[left])
		left--
	}

	for right < len(A) {
		res = append(res, A[right] * A[right])
		right++
	}

	return res
}