package algorithms

func numSmallerFrequency(s string) int {
	var count [128]int
	var min int32
	min = 256
	for _, c := range s {
		count[c]++
		if c < min {
			min = c
		}
	}

	return count[min]
}

func numSmallerByFrequency(queries []string, words []string) []int {
	var qCount []int
	for _, word := range queries {
		qCount = append(qCount, numSmallerFrequency(word))
	}

	var wCount []int
	for _, word := range words {
		wCount = append(wCount, numSmallerFrequency(word))
	}

	var res []int
	for _, qc := range qCount {
		sum := 0
		for _, wc := range wCount {
			if wc > qc {
				sum++
			}
		}
		res = append(res, sum)
	}

	return res
}