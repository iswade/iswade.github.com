package algorithms

import (
	"fmt"
	"testing"
)

func TestTerminateProcess(t *testing.T) {
	pid := []int{1,3,10,5}
	ppid := []int{3,0,5,3}
	r := killProcess(pid, ppid, 5)
	fmt.Println(r)

	r = killProcess(pid, ppid, 3)
	fmt.Println(r)

	r = killProcess(pid, ppid, 1)
	fmt.Println(r)

	r = killProcess(pid, ppid, 10)
	fmt.Println(r)

	r = killProcess(pid, ppid, 0)
	fmt.Println(r)

	pid = []int{1}
	ppid = []int{0}
	r = killProcess(pid,ppid, 1)
	fmt.Println(r)

	pid = []int{1,2,3,4}
	ppid = []int{0, 1, 2, 3}
	r = killProcess(pid,ppid, 4)
	fmt.Println(r)

	pid = []int{1,2}
	ppid = []int{0,1}
	r = killProcess(pid,ppid, 1)
	fmt.Println(r)

	pid = []int{1,3,10,20}
	ppid = []int{0,1,3,3}
	r = killProcess(pid,ppid, 1)
	fmt.Println(r)
}
