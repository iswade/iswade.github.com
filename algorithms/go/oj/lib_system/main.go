package main

import (
	"fmt"
	"io"
)

func borrow(info [][3]int) int {
	initMoney := 300
	for i := 0; i < len(info); i++ {
		if initMoney < info[i][0] {
			continue
		}
		if info[i][0] >= 100 {
			need := 0
			if info[i][2] <= 15 {
				need += info[i][2] * 5
			} else if info[i][2] > 15 {
				need += 15*5 + (info[i][2]-15)*3
			}
			if info[i][2] > info[i][1] {
				need += info[i][2] - info[i][1]
			}
			if need > info[i][0] {
				need = info[i][0]
			}
			initMoney -= need
			continue
		}

		if info[i][0] >= 50 {
			need := 0
			if info[i][2] <= 15 {
				need += info[i][2] * 3
			} else if info[i][2] > 15 {
				need += 15*3 + (info[i][2]-15)*2
			}
			if info[i][2] > info[i][1] {
				need += info[i][2] - info[i][1]
			}
			if need > info[i][0] {
				need = info[i][0]
			}
			initMoney -= need
			continue
		}

		need := info[i][2] * 1
		need += info[i][2] - info[i][1]
		if need > info[i][0] {
			need = info[i][0]
		}

		initMoney -= need
	}

	return initMoney
}

func main() {
	var info [][3]int
	for {
		var money, days, real int
		_, err := fmt.Scanf("%d,%d,%d\n", &money, &days, &real)
		if err == io.EOF {
			break
		}
		info = append(info, [3]int{money, days, real})
	}

	r := borrow(info)
	fmt.Println(r)
}
