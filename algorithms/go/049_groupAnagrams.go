package algorithms

import "sort"

func groupAnagrams(strs []string) [][]string {

	count := 0

	ht := make(map[string]int)
	ht1 := make(map[int][]string)

	for i := 0; i < len(strs); i++ {
		str := []byte(strs[i])
		sort.Slice(str, func(i, j int) bool {
			if str[i] < str[j] {
				return true
			} else {
				return false
			}
		})

		v, ok := ht[string(str)]
		if ok != true {
			ht[string(str)] = count
			ht1[count] = append(ht1[count], strs[i])
			count++
		} else {
			ht1[v] = append(ht1[v], strs[i])
		}
	}

	var res [][]string
	for _, v := range ht1 {
		res = append(res, v)
	}
	return res
}
