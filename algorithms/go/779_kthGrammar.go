package algorithms

func kthGrammar(N int, K int) int {
	if K == 1 {
		return 0
	}

	if K%2 == 0 {
		r := kthGrammar(N, K/2)
		if r == 0 {
			r = 1
		} else if r == 1 {
			r = 0
		}
		return r
	}

	return kthGrammar(N, (K+1)/2)
}
