package algorithms

import (
	"fmt"
	"testing"
)

func TestDailyTemp(t *testing.T) {
	temp := []int{73, 74, 75, 71, 69, 72, 76, 73}
	r := dailyTemperatures(temp)
	fmt.Println(r)
}
