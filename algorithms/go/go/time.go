package gostudy

import (
	"fmt"
	"math/rand"
	"sort"
	"time"
)

func usedTime() {
	arr := make([]int, 1000000)
	for i := 0; i < 1000000; i++ {
		arr[i] = rand.Int()
	}

	start := time.Now()
	sort.Ints(arr)
	end := time.Now()
	delta := end.Sub(start)
	fmt.Printf("sort.Ints took this amount of time: %s\n", delta)
}
