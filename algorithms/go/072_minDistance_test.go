package algorithms

import "testing"

func TestMinDistance(t *testing.T) {
	word1 := "horse"
	word2 := "ros"

	r := minDistance(word1, word2)
	if r != 3 {
		t.Error(r, "!=", 3)
	}
}
