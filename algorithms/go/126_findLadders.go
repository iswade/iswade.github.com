package algorithms

func isSimilar(s string, p string) bool {
	if len(s) != len(p) {
		return false
	}

	count := 0
	for i := 0; i < len(s); i++ {
		if s[i] != p[i] {
			count++
		}
		if count == 2 {
			return false
		}
	}
	if count == 1 {
		return true
	}
	return false
}

func findLaddersHelper(word, endWord string, wordList []string) {
	for i := 0; i < len(wordList); i++ {
		if isSimilar(word, wordList[i]) {

		}
	}
}

func findLadders(beginWord string, endWord string, wordList []string) [][]string {
	if len(beginWord) != len(endWord) {
		return nil
	}
	return nil
}
