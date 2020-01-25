package algorithms

func minSwapsCouples(row []int) int {
	ans := 0
	for i := 0; i < len(row); i += 2 {
		x := row[i]
		// 判断是否为 couple
		if row[i+1] == x^1 {
			continue
		}
		ans++ // 不是 couple
		// 找到自己的 couple 所在的座位，交换
		for j := i + 1; j < len(row); j++ {
			if row[j] == x^1 {
				row[i+1], row[j] = row[j], row[i+1]
			}
		}
	}

	return ans
}
