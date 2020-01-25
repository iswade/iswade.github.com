package algorithms

import "testing"

func TestMinimumLengthEncoding(t *testing.T) {
	words := []string{"time", "me", "bell"}
	r := minimumLengthEncoding(words)
	if r != 10 {
		t.Error(r)
	}
}
