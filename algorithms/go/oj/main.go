package main

import (
	"fmt"
)

func main() {
	azStateFormat :=
		`%-32s %s
%-32s %s
%-32s %s
%-32s %s
`
	fmt.Printf(azStateFormat,
		"az_state :", "fine",
		"cluster_state :", "Normal",
		"balanced :", "true",
		"disaster_tolerance :", "master")

}
