package trie

type Trie struct {
	bytes [26]*Trie
	end   bool
}

/** Initialize your data structure here. */
func Constructor() Trie {
	var bytes [26]*Trie
	return Trie{bytes, false}
}

/** Inserts a word into the trie. */
func (trie *Trie) Insert(word string) {
	t := trie
	for i := 0; i < len(word); i++ {
		if t.bytes[word[i]-'a'] == nil {
			var bytes [26]*Trie
			t.bytes[word[i]-'a'] = &Trie{bytes, false}
		}

		t = t.bytes[word[i]-'a']
	}
	t.end = true
}

/** Returns if the word is in the trie. */
func (trie *Trie) Search(word string) bool {
	t := trie
	for _, c := range word {
		if t.bytes[c-'a'] == nil {
			return false
		}

		t = t.bytes[c-'a']
	}

	return t.end
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (trie *Trie) StartsWith(prefix string) bool {
	t := trie
	for _, c := range prefix {
		if t.bytes[c-'a'] == nil {
			return false
		}

		t = t.bytes[c-'a']
	}

	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
