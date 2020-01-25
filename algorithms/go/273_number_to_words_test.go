// Copyright (c) Huawei Technologies Co., Ltd. 2012-2018. All rights reserved.
package algorithms

import (
	"fmt"
	"testing"
)

func TestNumToWords(t *testing.T) {
	r := numberToWords(123)
	fmt.Println(r)

	r = numberToWords(123456)
	fmt.Println(r)

	r = numberToWords(123456789)
	fmt.Println(r)

	r = numberToWords(1234567891)
	if r != "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One" {
		t.Error(r)
	}

	r = numberToWords(12345)
	if r != "Twelve Thousand Three Hundred Forty Five" {
		t.Error(r)
	}

	r = numberToWords(300)
	if r != "Three Hundred" {
		t.Error(r)
	}

	r = numberToWords(1000)
	fmt.Println(r)
}
