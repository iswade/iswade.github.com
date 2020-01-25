package gostudy

import (
	"encoding/json"
	"fmt"
)

type Config struct {
	A string
	B string
	C string
}

type Layout struct {
	Config *Config
}

func josnExample() {
	jsonStr := `{
    "Config": {
        "A": "aaa",
        "C": "ccc",
        "Misc": "ddd"
    }}`
	var layout Layout
	json.Unmarshal([]byte(jsonStr), &layout)
	fmt.Printf("%v\n", layout.Config)
	fmt.Printf("B is: %s\n", layout.Config.B)
	fmt.Printf("%%v: %v\n", layout.Config)
	fmt.Printf("%%#v: %#v\n", layout.Config)
	fmt.Printf("%%+v: %+v\n", layout.Config)
	fmt.Printf("%%T: %T\n", layout.Config)
}

// Feature1: 解析字段与json结构的对应关系，可以只对应json中一部分内容，不需要完全一致
//           json中只出现一部分内容，则结构中多余的字段为空
