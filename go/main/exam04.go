package main

import (
	"fmt"
	"runtime"
	"strconv"
	"sync"
	"time"
)

var g sync.Once

func Sync() {
	f := func() {
		fmt.Println("a")
		Sync()
	}
	fmt.Println("b")
	g.Do(f)
	fmt.Println("c")
}

var b = 0

func closure() {
	f := func() func(i int) int {
		a := 0
		return func(i int) int {
			a++
			b++
			fmt.Print(i, a, b)
			fmt.Println()
			return i + a + b
		}
	}
	f1 := f()
	f2 := f()
	fmt.Print(f1(1))
	fmt.Println()
	fmt.Print(f2(1))
	fmt.Println()
	fmt.Print(f1(1))
	fmt.Println()
	fmt.Print(f2(1))
	fmt.Println()
}

func f(a *[3]int) {
	a[0] = 0
}
func channel() {
	ch := make(chan int)
	str := make(chan string)
	go func() {
		ch <- 1
	}()
	go func() {
		str <- "hello"
	}()

	for {
		select {
		case <-ch:
			fmt.Println("int")
		case <-str:
			fmt.Println("string")
		default:
			fmt.Println("exception")
		}
	}
}
func other() {
	Sync()
	return
	// closure()

	s := []int{1, 2, 3}

	s1 := s
	s1 = append(s1, 4)
	fmt.Println(len(s1), cap(s1))
	appOne(s)
	appOne(s1)
	fmt.Println(s, s1)

	m := make(map[int][]int)
	s3 := []int{1, 2}
	s4 := []int{3, 4}
	m[1] = s3
	m[2] = s4
	for _, v := range m {
		for i := range v {
			v[i]++
		}
	}
	fmt.Println(m[1])
	for v := range m[2] {
		v++
	}
	fmt.Println(m[2])

	ss := []int{0, 1, 2, 3}
	m1 := make(map[int]*int)
	for i, v := range ss {
		m1[i] = &v
		fmt.Println(&v)
	}

	for _, v := range m1 {
		fmt.Print(*v)
	}

}

func appOne(s []int) {
	s = append(s, 0)
	for i := range s {
		s[i]++
	}
}

func longTimeRun() {
	runtime.GOMAXPROCS(1)
	var l uint64
	start := time.Now()
	s := ""
	for i := 0; i < 100_10000_10000; i++ {
		l += uint64(i)
		if i%1000 == 0 {
			s += strconv.Itoa(i)
			s = ""
		}
		current := time.Since(start)
		if current.Seconds() > 2 {
			start = time.Now()
			fmt.Println(start.String(), "loop =", i)

		}
	}
}
