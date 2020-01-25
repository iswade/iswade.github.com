package algorithms

import "testing"

func TestMostCommonWord(t *testing.T) {
	para := "Bob hit a ball, the hit BALL flew far after it was hit."
	banned := []string{"hit"}

	res := mostCommonWord(para, banned)
	if res != "ball" {
		t.Error(res)
	}
}
