// Copyright (c) Huawei Technologies Co., Ltd. 2012-2018. All rights reserved.
package algorithms

var numMap = map[int]string{
	0:  "Zero",
	1:  "One",
	2:  "Two",
	3:  "Three",
	4:  "Four",
	5:  "Five",
	6:  "Six",
	7:  "Seven",
	8:  "Eight",
	9:  "Nine",
	10: "Ten",
	11: "Eleven",
	12: "Twelve",
	13: "Thirteen",
	14: "Fourteen",
	15: "Fifteen",
	16: "Sixteen",
	17: "Seventeen",
	18: "Eighteen",
	19: "Nineteen",
	20: "Twenty",
	30: "Thirty",
	40: "Forty",
	50: "Fifty",
	60: "Sixty",
	70: "Seventy",
	80: "Eighty",
	90: "Ninety",
}

// abc
func numberToWords(num int) string {

	if num <= 20 {
		return numMap[num]
	}

	if num < 100 {
		if num%10 == 0 {
			return numMap[num]
		}
		n := num / 10
		return numberToWords(n*10) + " " + numberToWords(num%10)
	}

	if num < 1000 {
		if num%100 == 0 {
			return numberToWords(num/100) + " Hundred"
		}
		return numberToWords(num/100) + " Hundred " + numberToWords(num%100)
	}

	if num < 1000000 {
		if num%1000 == 0 {
			return numberToWords(num/1000) + " Thousand"
		}
		return numberToWords(num/1000) + " Thousand " + numberToWords(num%1000)
	}

	if num < 1000000000 {
		if num%1000000 == 0 {
			return numberToWords(num/1000000) + " Million"
		}
		return numberToWords(num/1000000) + " Million " + numberToWords(num%1000000)
	}

	if num%1000000000 == 0 {
		return numberToWords(num/1000000000) + " Billion"
	}

	return numberToWords(num/1000000000) + " Billion " + numberToWords(num%1000000000)
}
