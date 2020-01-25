package new

import (
	"fmt"
	"testing"
)

func TestLastSubstring(t *testing.T) {
	r := lastSubstring("abab")
	fmt.Println(r)

	r = lastSubstring("ababa")
	fmt.Println(r)
}
