package main

import (
	"fmt"
)

func merge(s string, k int) int {

	var a []int
	var last int32

	a = make([]int, len(s))
	count := 0
	for _, c := range s {
		if last == 0 {
			last = c
			a[count] = 1
		} else {
			if last == c {
				a[count]++
			} else {
				count++
				a[count] = 1
			}
			last = c
		}
	}

	count++
	a = a[0:count]

	if len(a) < k {
		return 0
	}

	sum := 0

	if k == 1 {
		for _, i := range a {
			sum += i * (i + 1) / 2
		}
	} else {
		left := 0
		right := k - 1
		for right < len(a) {
			sum += a[left] * a[right]
			left++
			right++
		}
	}

	return sum
}

func main() {

	var k int
	_, _ = fmt.Scanln(&k)

	var s string
	_, _ = fmt.Scan(&s)

	fmt.Printf("%v", merge(s, k))
}
