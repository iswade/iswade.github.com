package algorithms

import (
	"fmt"
	"testing"
)

func TestPP(t *testing.T) {
	for i := 8; i < 9; i++ {
		fmt.Println(i, ":", primePalindrome(i))
	}
}
