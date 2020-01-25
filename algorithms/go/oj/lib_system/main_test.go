package main

import (
	"testing"
)

func TestBorrow(t *testing.T) {
	info := [][3]int{
		{120, 10, 10},
		{80, 10, 3},
		{30, 10, 12},
	}

	r := borrow(info)
	if r != 227 {
		t.Error(r)
	}

	info = [][3]int{
		{120, 30, 10},
		{80, 30, 33},
		{30, 30, 33},
	}
	r = borrow(info)
	if r != 227 {
		t.Error(r)
	}
}
