package algorithms

type TrieNode struct {
	Val      byte
	Children [26]*TrieNode
	End      bool
}

func NewTrieNode(Val byte) *TrieNode {
	return &TrieNode{Val: Val}
}

type Trie struct {
	root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{root: NewTrieNode('/')}
}

func (trie *Trie) Insert(word string) {
	node := trie.root
	n := len(word)
	for i := 0; i < n; i++ {
		index := word[i] - 'a'
		if node.Children[index] == nil {
			node.Children[index] = NewTrieNode(word[i])
		}
		node = node.Children[index]
	}
	node.End = true
}

func (trie *Trie) Search(word string) bool {
	node := trie.root
	n := len(word)
	for i := 0; i < n; i++ {
		index := word[i] - 'a'
		if node.Children[index] == nil {
			return false
		}
		node = node.Children[index]
	}
	return node.End
}

func (trie *Trie) StartsWith(prefix []byte) (isPrefix bool, isWord bool) {
	node := trie.root
	n := len(prefix)
	for i := 0; i < n; i++ {
		index := prefix[i] - 'a'
		if node.Children[index] == nil {
			return false, false
		}
		node = node.Children[index]
	}
	return true, node.End
}
