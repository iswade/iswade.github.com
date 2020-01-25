package algorithms

var digitsMap = [10]string{2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"}

func findCombination(digits string, index int, s string, res *[]string) {
	if index == len(digits) {
		*res = append(*res, s)
		return
	}
	c := digits[index]
	letters := digitsMap[c-'0']
	for i := 0; i < len(letters); i++ {
		findCombination(digits, index+1, s+string(letters[i]), res)
	}
}

func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return nil
	}
	var res []string
	findCombination(digits, 0, "", &res)
	return res
}
