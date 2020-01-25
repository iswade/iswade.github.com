package algorithms

import "strings"

var gWords []string

func findWords(board [][]byte, words []string) []string {
	m := len(board)
	if m == 0 {
		return nil
	}
	n := len(board[0])

	gWords = words
	maxWordLen := 0
	// 已经匹配的word
	matchedWords := make(map[string]bool)
	wordsLen := len(words)
	// 匹配的字符串
	s := make([]byte, 0, maxWordLen)
	// 记录访问过的元素
	mask := make([][]bool, m)
	for i := 0; i < m; i++ {
		mask[i] = make([]bool, n)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			findWordsDfs(mask, matchedWords, wordsLen, board, m, n, i, j, s)
			if len(matchedWords) >= wordsLen {
				return words
			}
		}
	}
	ret := make([]string, 0, len(matchedWords))
	for k, _ := range matchedWords {
		ret = append(ret, k)
	}

	return ret
}

func findWordsStartsWith(s string) (bool, bool) {
	hasPrefix := false
	for i := range gWords {
		if s == gWords[i] {
			return true, true
		}
		if strings.HasPrefix(gWords[i], s) {
			hasPrefix = true
		}
	}
	return hasPrefix, false
}

func findWordsDfs(mask [][]bool, matchWords map[string]bool, wordsLen int, board [][]byte, m, n, i, j int, s []byte) {
	if i < 0 || i >= m || j < 0 || j >= n || mask[i][j] {
		return
	}
	s = append(s, board[i][j])
	isPrefix, isWord := findWordsStartsWith(string(s))
	if !isPrefix {
		return
	}
	if isWord {
		matchWords[string(s)] = true
		if len(matchWords) >= wordsLen {
			return
		}
	}
	mask[i][j] = true
	findWordsDfs(mask, matchWords, wordsLen, board, m, n, i+1, j, s)
	findWordsDfs(mask, matchWords, wordsLen, board, m, n, i-1, j, s)
	findWordsDfs(mask, matchWords, wordsLen, board, m, n, i, j-1, s)
	findWordsDfs(mask, matchWords, wordsLen, board, m, n, i, j+1, s)
	mask[i][j] = false
}
