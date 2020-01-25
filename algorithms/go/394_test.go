package algorithms

import "testing"

func TestDecodeString(t *testing.T) {
	r := decodeString("3[a]2[bc]")
	if r != "aaabcbc" {
		t.Error(r)
	}

	r = decodeString("3[a2[c]]")
	if r != "accaccacc" {
		t.Error(r)
	}

	r = decodeString("2[abc]3[cd]ef")
	if r != "abcabccdcdcdef" {
		t.Error(r)
	}

}
