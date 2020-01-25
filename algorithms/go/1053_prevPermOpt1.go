package algorithms

// 1、尽量交换低位，且从更低位选择要交换的数字，这样代价最低
// 2、交换时从可选数字里选择最大的，保证交换后也是最大的
// 3、如果最大的有多个，则选择最高位（最左边的）
func prevPermOpt1(A []int) []int {
	for i := len(A) - 2; i >= 0; i-- {
		var max, idx int
		// 找到可选数字里最大的
		for j := len(A) - 1; j > i; j-- {
			if A[j] < A[i] {
				if A[j] >= max {
					max = A[j]
					idx = j
				}
			}
		}
		// 找到后交换
		if max > 0 {
			tmp := A[idx]
			A[idx] = A[i]
			A[i] = tmp
			return A
		}
	}

	return A
}
