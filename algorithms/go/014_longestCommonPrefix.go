package algorithms

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	res := ""
	invalid := false
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			if i >= len(strs[j]) {
				invalid = true
				break
			}
			if strs[j][i] != strs[0][i] {
				invalid = true
				break
			}
		}
		if invalid == true {
			break
		}
		res += string(strs[0][i])
	}
	return res
}
