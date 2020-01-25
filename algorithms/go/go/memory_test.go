package gostudy

import "testing"

func TestFlowControlBasedMem(t *testing.T) {
	GoRoutineAllocMemory = 5 * 1024 * 1024 * 1024
	GoRoutineGCThreshold = 5 * 1024 * 1024 * 1024

	flowControlBasedMem()
}