package algorithms

import "math/big"

func multiply(num1 string, num2 string) string {
	bn1, _ := new(big.Int).SetString(num1, 10)
	bn2, _ := new(big.Int).SetString(num2, 10)
	bn3 := bn1.Mul(bn1, bn2)
	return bn3.String()
}
