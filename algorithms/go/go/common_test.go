package gostudy

import (
	"fmt"
	"testing"
)

func TestFloatSuit(t *testing.T) {
	floatSuite()
}

type myType struct {
	a int
	b string
}

func (t myType) String() string {
	return fmt.Sprintf("%d-%s", t.a, t.b)
}

func TestUsedTime(t *testing.T) {
	usedTime()

	var i string
	var tt interface{}
	tt = i
	switch tt.(type) {
	case bool:
		fmt.Println("bool")
	case int:
		fmt.Println("int")
	case string:
		fmt.Println("string")
	default:
		fmt.Println("default")
	}

	fmt.Println(&myType{1, "abc"})
}

func TestStringSuit(t *testing.T) {
	stringSuit()
}

func TestMapSuite(t *testing.T) {
	mapSuite()
}

func TestMax(t *testing.T) {
	maxAny()
}

func TestSelect(t *testing.T) {
	testSelect()
}

func TestChan(t *testing.T) {
	chanExample()
}

func TestJson(t *testing.T) {
	josnExample()
}
