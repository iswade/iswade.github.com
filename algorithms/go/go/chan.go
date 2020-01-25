package gostudy

import "fmt"

func chanExample() {
	ch := make(chan int, 1)
	ch <- 1000
	close(ch)
	i, ok := <-ch
	if !ok {
		fmt.Printf("1 is closed\n")
	}
	fmt.Printf("%d\n", i)
	select {
	case i, ok = <-ch:
		if !ok {
			fmt.Printf("2 is closed\n")
		}
	default:
		fmt.Printf("other\n")
	}
}