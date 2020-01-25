package main

import (
	"math/big"
)

func fact(n int) *big.Int {
	res := big.NewInt(1)

	for i:= 1; i <= n; i++ {
		res = res.Mul(res, big.NewInt((int64)(i)))
	}

	return res
}
