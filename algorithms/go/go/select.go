package gostudy

import "fmt"

func fibonacci(c, quit chan int) {
	select {
	case <-quit:
		fmt.Println("quit")
		return
	default:
		// c <- 1
		fmt.Printf("default")
	}
}

func testSelect() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		quit <- 0
	}()
	fibonacci(c, quit)
}