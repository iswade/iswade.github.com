package algorithms

import "testing"

func TestToLowerCase(t *testing.T) {
	a := "HellO"
	r := toLowerCase(a)
	if r != "hello" {
		t.Error(a, r)
	}
}