package algorithms

import "strings"

func fullJustify(words []string, maxWidth int) []string {
	var ans []string
	var line []string
	var lineLen int
	for wordIdx := 0; wordIdx < len(words); wordIdx++ {
		word := words[wordIdx]
		if lineLen+len(word) == maxWidth {
			line = append(line, word)
			lineLen += len(word)
			continue
		}
		if lineLen+len(word) < maxWidth {
			line = append(line, word)
			line = append(line, " ")
			lineLen += 1 + len(word)
			continue
		}

		if wordIdx > 0 {
			wordIdx--
		}
		// 一行结束，确认是否添加空格
		if len(line) > 2 {
			for idx := len(line) - 1; idx >= 0; idx-- {
				if line[idx][0] == ' ' {
					line = line[0:idx]
					lineLen--
				} else {
					break
				}
			}
		}
		count := 0
		for i := 0; i < maxWidth-lineLen; i++ {
			for count < len(line) {
				if line[count][0] == ' ' {
					break
				}
				count++
				if count == len(line) {
					count = 0
				}
			}
			if line[count][0] == ' ' {
				line[count] += " "
			}
			count++
			if count == len(line) {
				count = 0
			}
		}
		ans = append(ans, strings.Join(line, ""))
		line = nil
		lineLen = 0
	}

	// 一行结束，确认是否添加空格
	if len(line) > 2 {
		for idx := len(line) - 1; idx >= 0; idx-- {
			if line[idx][0] == ' ' {
				line = line[0:idx]
				lineLen--
			} else {
				break
			}
		}
	}

	lastLine := strings.Join(line, "")
	lastLine += strings.Repeat(" ", maxWidth-len(lastLine))
	ans = append(ans, lastLine)
	line = nil
	lineLen = 0

	return ans
}
