package trie

import "testing"

func TestTrie(t *testing.T) {
	trie := Constructor()
	trie.Insert("apple")
	r := trie.Search("apple")
	if r != true {
		t.Error(r)
	}

	r = trie.Search("app")
	if r != false {
		t.Error(r)
	}

	r = trie.StartsWith("app")
	if r != true {
		t.Error(r)
	}

	trie.Insert("app")
	r = trie.Search("app")
	if r != true {
		t.Error(r)
	}
}
