package algorithms

import "testing"

func TestKthGrammar(t *testing.T) {
	r := kthGrammar(1, 1)
	if r != 0 {
		t.Error(r)
	}

	r = kthGrammar(2, 1)
	if r != 0 {
		t.Error(r)
	}

	r = kthGrammar(2, 2)
	if r != 1 {
		t.Error(r)
	}

	r = kthGrammar(4, 5)
	if r != 1 {
		t.Error(r)
	}
}
