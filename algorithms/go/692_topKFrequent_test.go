package algorithms

import (
	"fmt"
	"testing"
)

func TestTopKFrequent(t *testing.T)  {
	a := []string{"i", "love", "leetcode", "i", "love", "coding"}

	res := topKFrequent(a, 2)
	fmt.Println(res)
}


func TestTopKFrequent02(t *testing.T)  {
	a := []string{"the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"}

	res := topKFrequent(a, 4)
	fmt.Println(res)
}

func TestTopKFrequent03(t *testing.T)  {
	a := []string{"the", "day", "day", "the", "is"}

	res := topKFrequent(a, 2)
	fmt.Println(res)
}
