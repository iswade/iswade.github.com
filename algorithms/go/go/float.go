package gostudy

import (
	"fmt"
	"math"
)

func floatSuite() {
	var a float64 = 1.5
	var b float64 = 1.3
	var res float64 = a - b

	if math.Abs(res-0.2) < 0.000001 {
		fmt.Printf("equal %0.20f\n", math.Abs(res-0.2))
	} else {
		fmt.Println("not equal", math.Abs(res-0.2))
	}
}
