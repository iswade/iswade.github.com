package algorithms

import "testing"

func TestMultiply(t *testing.T) {
	r := multiply("123", "456")
	if r != "56088" {
		t.Error(r)
	}
}
