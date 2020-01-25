package array

import "fmt"

func ExampleArray() {
	// 申明和初始化
	var a [3]int = [3]int{1, 2}
	fmt.Println(a)

	// 变长类型初始化
	b := [...]int{1, 2, 3}
	fmt.Println(b)
	fmt.Printf("%p\n", &b)

	// 两个数组的复制：逐个进行赋值，长度必须一致
	b = [...]int{4, 5, 6}
	fmt.Println(b)

	// 数组的地址没有变化，是直接往原有的内存中写入内容
	fmt.Printf("%p\n", &b)

	// 数组的值传递：也可以通过引用&传递内容
	func(a *[3]int, b [3]int) {
		fmt.Printf("%p, %p\n", a, &b)
	}(&b, b)

	// 数组的比较：如果素有元素对应相等，则两个数组完全相等，两个数组长度不一致，则编译出错
	c := [3]int{1, 2, 0}
	fmt.Println(a == c)

	fmt.Println(cap(c))

	fmt.Println(len(c))

	println(1, 2, "string")
}

func ExampleSlice() {
	months := [...]string{1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June",
		7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
	fmt.Println("months:", months)

	s := months[5:8]
	fmt.Println(s)
	fmt.Printf("%p\n", s)
	fmt.Printf("%p\n", &months[5])
	fmt.Println("s = months[5:8]:", s)
	months[6] = "june"
	fmt.Println("months[6] modified to june")
	fmt.Println("s:", s)
	s[0] = "may"
	fmt.Println("s[0] modified to may")
	fmt.Println(months)
	fmt.Println(s)

	fmt.Println("s append unknown")
	s = append(s, "unknown")
	fmt.Println(months)
	fmt.Println(s)

	r := s[:]
	r = append(r, "unknown")
	fmt.Println(r)
	fmt.Println(s)
	s[0] = "january"
	s = append(s, "unknown")
	fmt.Println(months)

	s = months[11:]
	fmt.Println(s)
	fmt.Println(cap(s), len(s))
	fmt.Printf("%p\n", s)
	fmt.Printf("%p\n", &months[11])

	s = append(s, "unknown")
	fmt.Printf("%p\n", s)
	fmt.Println(s)
	fmt.Println("cap:", cap(s), "len", len(s))

	s[1] = "unknown"
	fmt.Printf("%p\n", s)
	s = append(s, "unknown")
	fmt.Printf("%p\n", s)
	s = append(s, "unknown")
	fmt.Printf("%p\n", s)
	fmt.Println(s)
	fmt.Println("cap:", cap(s), "len", len(s))
	fmt.Println(months)

	p := s[0:8]
	for _, m := range p {
		fmt.Printf("month: %s ", m)
	}
	fmt.Println()

	a := []int{0, 1, 2, 3, 4, 5}
	reverseInts(a)
	fmt.Println(a)

	a = []int{0}
	reverseInts(a)
	fmt.Println(a)

	a = []int{}
	if a == nil {
		fmt.Println("a is nil")
	}
	reverseInts(a)
	fmt.Println(a)
	fmt.Println(cap(a), len(a))
	var d []int
	if d == nil {
		fmt.Println("d is nil")
	}
	d = append(d, 1)
	fmt.Println(cap(d), len(d))

	x := []int{1, 2}
	y := []int{2, 3, 4}
	min := copy(x, y)
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(min, "elements copied")

	z := make([]int, 4, 64)
	fmt.Println(cap(z), len(z))
	fmt.Printf("%+v\n", z)
}

func reverseInts(a []int) {
	l := len(a)
	for i := 0; i < l/2; i++ {
		a[i], a[l-i-1] = a[l-i-1], a[i]
	}
}

func ExampleString() {
	a := "abcdef，世界"
	for i, c := range a {
		fmt.Printf("%d: %d %c\n", i, a[i], c)
	}

	fmt.Println()

	b := []byte{'a', 'b', 'c', 'd'}
	for i, c := range b {
		fmt.Printf("%d: %d %c\n", i, b[i], c)
	}

	fmt.Println()
}
