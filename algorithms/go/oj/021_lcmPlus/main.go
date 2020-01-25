package main

import (
	"fmt"
	"io"
	"math/big"
)

/*
0    1    2    3    4    5    6    7
0    1    2    6    12   60   60  420
*/

func main() {
	var memo []*big.Int

	memo = append(memo, big.NewInt(0))
	memo = append(memo, big.NewInt(1))

	last := big.NewInt(2)
	for i := 2; i <= 101; i++ {
		index := big.NewInt(int64(i))
		gcd := big.NewInt(1).GCD(nil, nil, last, index)               // 最小公约数
		last = big.NewInt(1).Div(big.NewInt(1).Mul(last, index), gcd) // 最大公倍数
		memo = append(memo, last)
	}

	for {
		n := 0
		_, err := fmt.Scanln(&n)
		if err != io.EOF {
			fmt.Println(memo[n])
		} else {
			break
		}
	}
}
