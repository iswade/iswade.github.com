package algorithms

import (
	"sort"
	"strings"
)

type pathNode struct {
	files map[string]string
	dirs  map[string]*pathNode
}

type fileSystem struct {
	root *pathNode
}

func newFileSystem() *fileSystem {
	fs := &fileSystem{}
	fs.root = &pathNode{make(map[string]string), make(map[string]*pathNode)}
	return fs
}

func (fs *fileSystem) ls(path string) []string {
	var files []string

	t := fs.root
	if path != "/" {
		subPaths := strings.Split(path, "/")
		for i := 1; i < len(subPaths)-1; i++ {
			t = t.dirs[subPaths[i]]
		}

		if _, ok := t.files[subPaths[len(subPaths)-1]]; ok {
			files = append(files, t.files[subPaths[len(subPaths)-1]])
			return files
		} else {
			t = t.dirs[subPaths[len(subPaths)-1]]
		}
	}

	for k, _ := range t.dirs {
		files = append(files, k)
	}

	for k, _ := range t.files {
		files = append(files, k)
	}

	sort.Strings(files)
	return files
}

func (fs *fileSystem) mkdir(path string) {
	subPaths := strings.Split(path, "/")
	t := fs.root

	for _, path := range subPaths {
		if path == "" {
			continue
		}

		if _, ok := t.dirs[path]; !ok {
			t.dirs[path] = &pathNode{
				files: make(map[string]string),
				dirs:  make(map[string]*pathNode),
			}
		}

		t = t.dirs[path]
	}
}

func (fs *fileSystem) addContentToFile(file string, content string) {
	t := fs.root
	subPaths := strings.Split(file, "/")
	for i := 1; i < len(subPaths)-1; i++ {
		if subPaths[i] == "" {
			continue
		}
		t = t.dirs[subPaths[i]]
	}

	t.files[subPaths[len(subPaths)-1]] = content
}

func (fs *fileSystem) readContentFromFile(file string) string {
	t := fs.root
	subPaths := strings.Split(file, "/")
	for i := 1; i < len(subPaths)-1; i++ {
		if subPaths[i] == "" {
			continue
		}
		t = t.dirs[subPaths[i]]
	}
	return t.files[subPaths[len(subPaths)-1]]
}
