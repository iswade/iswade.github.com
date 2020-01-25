package 真题

import (
	"fmt"
	"testing"
)

func TestLogSystem(t *testing.T) {
	ls := Constructor()
	ls.Put(1, "2017:01:01:23:59:59")
	ls.Put(2, "2017:01:01:22:59:59")
	ls.Put(3, "2016:01:01:00:00:00")
	r := ls.Retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Year")
	fmt.Println(r)
	r = ls.Retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Hour")
	fmt.Println(r)
}
