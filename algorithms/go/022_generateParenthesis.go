package algorithms

func genParentHelper(n int, left, right int, expr string, res *[]string) {
	if len(expr) == 2*n {
		*res = append(*res, expr)
	}

	if left < n {
		genParentHelper(n, left+1, right, expr+"(", res)
	}

	if left > right {
		genParentHelper(n, left, right+1, expr+")", res)
	}
}

func generateParenthesis(n int) []string {
	var res []string
	genParentHelper(n, 0, 0, "", &res)
	return res
}
