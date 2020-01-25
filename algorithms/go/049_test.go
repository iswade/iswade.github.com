package algorithms

import (
	"fmt"
	"testing"
)

func TestGroupAnagrams(t *testing.T) {
	strs := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
	r := groupAnagrams(strs)
	fmt.Println(r)
}
