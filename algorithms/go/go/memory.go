package gostudy

import (
	"fmt"
	"runtime"
	"time"
)

var (
	GoRoutineAllocMemory uint64
	GoRoutineGCThreshold uint64 = 5 * 1024 * 1024 * 1024
)


func flowControlBasedMem() {

	// flow control to avoid OOM
	if GoRoutineAllocMemory >= GoRoutineGCThreshold {

		alloc := uint64(1)
		fmt.Printf("go alloc memory(%d), current(%d), threshold(%d)\n",
			GoRoutineAllocMemory, alloc, GoRoutineGCThreshold)

		if alloc > GoRoutineGCThreshold * 2 {
			fmt.Printf("sleep 30\n")
			time.Sleep(time.Second * 30)
		} else {
			sleepTime := uint64(1)
			alloc = alloc / 1024 / 1024 / 1024
			threshold := GoRoutineGCThreshold / 1024 / 1024 / 1024
			if alloc > threshold {
				sleepTime = alloc - threshold + 1
			}
			fmt.Printf("sleep %d\n", sleepTime)
			time.Sleep(time.Second * time.Duration(sleepTime))
		}

		runtime.GC()
	}
}