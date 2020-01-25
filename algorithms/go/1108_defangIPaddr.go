package algorithms

func defangIPaddr(address string) string {
	var res string
	for i := range address {
		if address[i] == '.' {
			res += "[.]"
		} else {
			res += string(address[i])
		}
	}

	return res
}
