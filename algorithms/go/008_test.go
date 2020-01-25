package algorithms

import "testing"

func TestMyAtoi(t *testing.T) {
	r := myAtoi("42")
	if r != 42 {
		t.Error(r)
	}

	r = myAtoi("    -42")
	if r != -42 {
		t.Error(r)
	}

	r = myAtoi("words and 987")
	if r != 0 {
		t.Error(r)
	}

	r = myAtoi("4993 with words")
	if r != 4993 {
		t.Error(r)
	}

	r = myAtoi("-91283472332")
	if r != -2147483648 {
		t.Error(r)
	}

	r = myAtoi("   +0 123")
	if r != 0 {
		t.Error(r)
	}

	r = myAtoi("9223372036854775808")
	if r != 2147483647 {
		t.Error(r)
	}

	r = myAtoi("10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000522545459")
	if r != 2147483647 {
		t.Error(r)
	}
}
