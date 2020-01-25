package main

import (
	"fmt"
	"testing"
)

func TestFact(t *testing.T) {
	r := fact(3)
	fmt.Println(r)
}

