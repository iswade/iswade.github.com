package main

import (
	"fmt"
	"reflect"
	"strconv"
	"strings"
	"testing"
	"unicode/utf8"
	"unsafe"
)

func ExampleStrings() {
	s := new(string)
	var s1 string
	s2 := "世界\x61\142\u0041"
	fmt.Printf("%s\n", s2)
	fmt.Printf("% x, len: %d\n", s2, len(s2))

	fmt.Printf("%T %T %T\n", s, s1, s2)
	fmt.Println(*s == "", s1 == "", s2 == "")
	fmt.Printf("%d\n", unsafe.Sizeof(s))
	fmt.Printf("%d\n", unsafe.Sizeof(s1))
	fmt.Printf("%d\n", unsafe.Sizeof(s2))
	fmt.Printf("%#v\n", (*reflect.StringHeader)(unsafe.Pointer(s)))
	fmt.Printf("%#v\n", (*reflect.StringHeader)(unsafe.Pointer(&s1)))
	// fmt.Printf("%#v\n", (*reflect.StringHeader)(unsafe.Pointer(&s2)))
	// &reflect.StringHeader{Data:0x4c7430, Len:9}

	// Output:
	// 世界abA
	// e4 b8 96 e7 95 8c 61 62 41, len: 9
	// *string string string
	// true true false
	// 8
	// 16
	// 16
	// &reflect.StringHeader{Data:0x0, Len:0}
	// &reflect.StringHeader{Data:0x0, Len:0}
}

func ExampleStrings02() {
	s := "世界"

	for i := 0; i < len(s); i++ {
		fmt.Printf("%d: [%c]\n", i, s[i])
	}

	for i, c := range s {
		fmt.Printf("%d: [%c]\n", i, c)
	}
	fmt.Printf("%T %T\n", '我', 'w')
	fmt.Println(s, utf8.RuneCountInString(s))
	// Output:
	// 0: [ä]
	// 1: [¸]
	// 2: []
	// 3: [ç]
	// 4: []
	// 5: []
	// 0: [世]
	// 3: [界]
	// int32 int32
	// 世界 2
}

func StringAdd() {
	var ss []string
	for i := 0; i < 100; i++ {
		s := strconv.Itoa(i)
		ss = append(ss, s)
	}

	var s string

	for i := 0; i < len(ss); i++ {
		s += ss[i]
	}
}

func StringJoin() {
	var ss []string
	for i := 0; i < 100; i++ {
		s := strconv.Itoa(i)
		ss = append(ss, s)
	}

	_ = strings.Join(ss, "")
}

func BenchmarkStringAdd(b *testing.B) {
	for i := 0; i < b.N; i++ {
		StringAdd()
	}
}
func BenchmarkStringJoin(b *testing.B) {
	for i := 0; i < b.N; i++ {
		StringJoin()
	}
}
