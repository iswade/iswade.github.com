package algorithms

const (
	DirectVertical = 0
	DirectUpright  = 1
)

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	z := make([][]rune, numRows)
	for i, _ := range z {
		z[i] = make([]rune, len(s))
	}
	i := 0
	j := 0
	direct := DirectVertical
	//maxCol := 0
	for idx, _ := range s {
		c := s[idx]
		switch direct {
		case DirectVertical:
			z[i][j] = rune(c)
			i++
			if i == numRows {
				//maxCol = j
				j++
				i -= 2
				direct = DirectUpright
			}
		case DirectUpright:
			z[i][j] = rune(c)
			i--
			j++
			if i == -1 {
				i = 1
				j--
				direct = DirectVertical
			}
		}
	}

	var res []rune
	for i := 0; i < len(z); i++ {
		for j := 0; j < len(z[i]); j++ {
			if z[i][j] != 0 {
				res = append(res, z[i][j])
			}
		}
	}

	return string(res)
}
