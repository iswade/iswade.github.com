package algorithms

import "testing"

func TestLRUCache(t *testing.T) {

	cache := Constructor1(2)
	cache.Put(1, 1)
	cache.Put(2, 2)
	r := cache.Get(1) // 返回  1
	if r != 1 {
		t.Error(r)
	}

	cache.Put(3, 3)  // 该操作会使得密钥 2 作废
	r = cache.Get(2) // 返回 -1 (未找到)
	if r != -1 {
		t.Error(r)
	}

	cache.Put(4, 4)  // 该操作会使得密钥 1 作废
	r = cache.Get(1) // 返回 -1 (未找到)
	if r != -1 {
		t.Error(r)
	}
	r = cache.Get(3) // 返回  3
	if r != 3 {
		t.Error(r)
	}
	r = cache.Get(4) // 返回  4
	if r != 4 {
		t.Error(r)
	}
}
