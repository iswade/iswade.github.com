package algorithms

import "sort"

type wordCount struct {
	word string
	count int
}

type wordCountsType []wordCount
func (p wordCountsType) Len() int           { return len(p) }
func (p wordCountsType) Less(i, j int) bool {
	if p[i].count > p[j].count {
		return true
	} else if p[i].count == p[j].count {
		return p[i].word < p[j].word
	} else {
		return false
	}
}
func (p wordCountsType) Swap(i, j int)      { p[i], p[j] = p[j], p[i] }

func topKFrequent(words []string, k int) []string {
	wordsHt := make(map[string]int, len(words))

	for _, word := range words {
		wordsHt[word]++
	}

	var wordCounts wordCountsType
	for k, v := range wordsHt {
		wordCounts = append(wordCounts, wordCount{k, v})
	}

	sort.Sort(wordCounts)

	var res []string
	for i := 0; i < k; i++ {
		res = append(res, wordCounts[i].word)
	}

	return res
}