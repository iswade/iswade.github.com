package algorithms

import "container/list"

type LRUNode struct {
	key   int
	value int
}

type LRUCache struct {
	list  *list.List
	htQ   map[int]*list.Element
	cap   int
	count int
}

func Constructor1(capacity int) LRUCache {
	lru := LRUCache{}
	lru.list = list.New()
	lru.htQ = make(map[int]*list.Element)
	lru.cap = capacity
	lru.count = 0

	return lru
}

func (lru *LRUCache) Get(key int) int {
	if v, ok := lru.htQ[key]; ok == true {
		element := lru.htQ[key]
		lru.list.MoveToFront(element)
		return v.Value.(*LRUNode).value
	} else {
		return -1
	}
}

func (lru *LRUCache) Put(key int, value int) {
	if _, ok := lru.htQ[key]; ok == true {
		element := lru.htQ[key]
		lru.list.Remove(element)
		lru.count--
	}

	if lru.count < lru.cap {
		node := lru.list.PushFront(&LRUNode{key: key, value: value})
		lru.htQ[key] = node
		lru.count++
	} else {
		node := lru.list.Remove(lru.list.Back())
		delete(lru.htQ, node.(*LRUNode).key)
		new := lru.list.PushFront(&LRUNode{key: key, value: value})
		lru.htQ[key] = new
	}
}
