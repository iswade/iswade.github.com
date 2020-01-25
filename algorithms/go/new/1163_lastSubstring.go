package new

func lastSubstring(s string) string {
	res := ""
	for i := 0; i < len(s); i++ {
		if s[i:] > res {
			res = s[i:]
		}
	}
	return res
}
