package algorithms

import (
	"fmt"
	"testing"
)

func TestFileSystem(t *testing.T) {
	/*
		/a/b/c/
		/a/b/c/d/
		/a/b/c/d   hello
		/a/b/c/f   你好

		/b/c/d/

		/d/e/g/
		/d/e/f/
	*/

	fs := newFileSystem()
	files := fs.ls("/")
	fmt.Println(files)

	fs.mkdir("/a/b/c")
	fs.mkdir("/b/c/d")
	fs.mkdir("/d/e/g")
	fs.mkdir("/d/e/f")

	files = fs.ls("/")
	fmt.Println(files)

	files = fs.ls("/d")
	fmt.Println(files)

	files = fs.ls("/d/e")
	fmt.Println(files)

	fs.addContentToFile("/a/b/c/d", "hello")

	fs.mkdir("/a/b/c/d")
	files = fs.ls("/a/b/c")
	fmt.Println(files)

	fs.addContentToFile("/a/b/c/f", "你好")
	content := fs.readContentFromFile("/a/b/c/f")
	fmt.Println(content)
}
