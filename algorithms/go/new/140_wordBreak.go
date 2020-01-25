package new

func wordBreak(s string, wordDict []string) []string {
	// 遍历一遍字典，并且加入到map中方便接下来的循环查询
	wordMap := make(map[string]bool, len(wordDict))
	for _, value := range wordDict {
		wordMap[value] = true
	}

	cache = make(map[int][]string)
	result := executeWordBreak(s, wordMap, 0)

	return result
}

// 递归在数据量大的时候会超时，用一个map记录中间结果避免重复计算
var cache map[int][]string

// 递归，即当前前缀在字典中，且剩下的字符也可以按前缀分隔
func executeWordBreak(s string, wordMap map[string]bool, start int) []string {
	if value, ok := cache[start]; ok {
		return value
	}

	var result []string
	if start == len(s) {
		result = append(result, "")
	}

	// 前缀在字典内，且剩下的字符串也可以分隔
	for end := start + 1; end <= len(s); end++ {
		sub := s[start:end]
		if wordMap[sub] {
			other := executeWordBreak(s, wordMap, end)
			for _, value := range other {
				if value != "" {
					result = append(result, sub+" "+value)
				} else {
					result = append(result, sub)
				}
			}
		}
	}

	cache[start] = result
	return result
}
