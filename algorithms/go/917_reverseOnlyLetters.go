package algorithms

func reverseOnlyLetters(S string) string {

	res := make([]byte, len(S))
	j := 0
	last := len(S) - 1
	for i := range S {
		if S[i] >= 'a' && S[i] <= 'z' || S[i] >= 'A' && S[i] <= 'Z' {

			k := 0
			for k = last; k >= 0; k-- {
				if S[k] >= 'a' && S[k] <= 'z' || S[k] >= 'A' && S[k] <= 'Z' {
					break
				}
			}

			last = k
			res[j] = S[last]
			j++

			if last > 0 {
				last--
			}
		} else {
			res[j] = S[i]
			j++
		}
	}

	return string(res)
}
