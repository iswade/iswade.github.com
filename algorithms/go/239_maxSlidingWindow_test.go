package algorithms

import (
	"fmt"
	"testing"
)

func TestMaxSlidingWindow(t *testing.T) {
	s := []int{1, 3, -1, -3, 5, 3, 6, 7}
	r := maxSlidingWindow(s, 3)
	fmt.Println(r)
}
