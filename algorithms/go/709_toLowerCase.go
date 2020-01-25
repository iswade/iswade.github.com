package algorithms

func toLowerCase(str string) string {
	var r []byte
	for i := range str {
		if str[i] >= 'A' && str[i] <= 'Z' {
			r = append(r, str[i] - 'A' + 'a')
		} else {
			r = append(r, str[i])
		}
	}

	return string(r)
}