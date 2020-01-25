package dp

import (
	"fmt"
	"testing"
)

func TestLongestPalindrome(t *testing.T) {
	s := "babad"
	r := longestPalindrome(s)
	fmt.Println(r)

	s = "cbbd"
	r = longestPalindrome(s)
	fmt.Println(r)

	s = "a"
	r = longestPalindrome(s)
	fmt.Println(r)
}
