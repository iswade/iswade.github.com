package 真题

import (
	"fmt"
	"testing"
)

func TestPrisonAfterNDays(t *testing.T) {
	nums := []int{0, 1, 0, 1, 1, 0, 0, 1}
	r := prisonAfterNDays(nums, 7)
	fmt.Println(r)

	nums = []int{1, 0, 0, 1, 0, 0, 1, 0}
	r = prisonAfterNDays(nums, 1000000000)
	fmt.Println(r)

}
