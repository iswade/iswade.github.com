package algorithms

import "container/list"

type MyCircularDeque struct {
	l   *list.List
	cap int
	len int
}

/** Initialize your data structure here. Set the size of the deque to be k. */
func Constructor(k int) MyCircularDeque {
	q := MyCircularDeque{}
	q.l = list.New()
	q.cap = k
	q.len = 0
	return q
}

/** Adds an item at the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertFront(value int) bool {
	if this.len == this.cap {
		return false
	}
	this.l.PushFront(value)
	this.len++
	return true
}

/** Adds an item at the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertLast(value int) bool {
	if this.len == this.cap {
		return false
	}
	this.l.PushBack(value)
	this.len++
	return true
}

/** Deletes an item from the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteFront() bool {
	if this.len <= 0 {
		return false
	}

	this.l.Remove(this.l.Front())
	this.len--
	return true
}

/** Deletes an item from the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteLast() bool {
	if this.len <= 0 {
		return false
	}

	this.len--
	this.l.Remove(this.l.Back())
	return true
}

/** Get the front item from the deque. */
func (this *MyCircularDeque) GetFront() int {
	if this.len <= 0 {
		return -1
	}

	n := this.l.Front().Value.(int)
	return n
}

/** Get the last item from the deque. */
func (this *MyCircularDeque) GetRear() int {
	if this.len <= 0 {
		return -1
	}
	n := this.l.Back().Value.(int)
	return n
}

/** Checks whether the circular deque is empty or not. */
func (this *MyCircularDeque) IsEmpty() bool {
	if this.len == 0 {
		return true
	}
	return false
}

/** Checks whether the circular deque is full or not. */
func (this *MyCircularDeque) IsFull() bool {
	if this.len == this.cap {
		return true
	}
	return false
}
