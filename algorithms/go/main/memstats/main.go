package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	runtime.GOMAXPROCS(2)

	go func() {
		for {
		}
	}()

	time.Sleep(time.Second)
	fmt.Println("hello")
}
