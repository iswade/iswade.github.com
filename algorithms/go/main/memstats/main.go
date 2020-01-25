package main

import (
	"fmt"
	"log"
	"runtime"
	"time"
)

func main() {
	go func() {
		for {
			var m runtime.MemStats
			start := time.Now()
			runtime.ReadMemStats(&m)
			delta := time.Now().Sub(start)
			log.Println(float64(m.Sys) / 1024 / 1024)
			log.Println(float64(m.HeapAlloc) / 1024 / 1024)
			log.Println(delta)
			time.Sleep(1 * time.Second)
		}
	}()

	var s []string
	for i := 0; i < 100000000; i++ {
		str := string(i) + "1"
		s = append(s, str)
	}
	fmt.Println("end")
	time.Sleep(1 * time.Hour)
	for i := 0; i < 100000000; i++ {
		fmt.Println(s[i])
	}
}
