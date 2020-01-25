package algorithms

import "strings"

func getNextWord(paragraph string, start *int) (ret string, end bool) {
	if *start == len(paragraph) {
		return "", true
	}

	var word []byte
	wordStart := false
	var i int

	for i = *start; i < len(paragraph); i++ {
		if paragraph[i] >= 'a' && paragraph[i] <= 'z' ||
			paragraph[i] >= 'A' && paragraph[i] <= 'Z' {
			word = append(word, paragraph[i])
			wordStart = true
			continue
		}

		if wordStart == true {
			break
		}
	}

	*start = i
	return string(word), false
}

func mostCommonWord(paragraph string, banned []string) string {

	banHT := make(map[string]bool)

	for _, word := range banned {
		banHT[word] = true
	}

	i := 0
	max := 0
	var mostWord string

	wordCount := make(map[string]int)
	for {
		word, end := getNextWord(paragraph, &i)
		if end == true {
			break
		}

		word = strings.ToLower(word)

		if banHT[word] == true {
			continue
		}
		wordCount[word]++
		if wordCount[word] > max {
			max = wordCount[word]
			mostWord = word
		}
	}

	return mostWord
}
