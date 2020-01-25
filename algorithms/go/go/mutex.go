package gostudy

import "sync"

type Replica struct {
	mu struct {
		sync.Mutex
		isLeader bool
	}
}

func ExampleReplica() {
	r := &Replica{}
	r.mu.Lock()
	defer r.mu.Unlock()
	r.mu.isLeader = true
}
